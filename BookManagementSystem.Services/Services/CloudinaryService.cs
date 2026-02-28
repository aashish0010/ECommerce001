using BookManagementSystem.Domain.DTO;
using BookManagementSystem.Domain.Entities;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace BookManagementSystem.Service.Services
{
    public class CloudinaryService
    {
        private readonly Cloudinary _cloudinary;
        private const long MaxFileSize = 5 * 1024 * 1024; // 5MB

        private static readonly HashSet<string> AllowedMimeTypes = new(StringComparer.OrdinalIgnoreCase)
        {
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "image/svg+xml"
        };

        public CloudinaryService(IConfiguration configuration)
        {
            var cloudName = configuration["Cloudinary:CloudName"];
            var apiKey = configuration["Cloudinary:ApiKey"];
            var apiSecret = configuration["Cloudinary:ApiSecret"];

            var account = new Account(cloudName, apiKey, apiSecret);
            _cloudinary = new Cloudinary(account);
            _cloudinary.Api.Secure = true;
        }

        public async Task<ImageUploadResponseDto> UploadImageAsync(IFormFile file, string folder = "products")
        {
            if (file == null || file.Length == 0)
            {
                return new ImageUploadResponseDto
                {
                    Status = Level.Failed,
                    Code = 400,
                    Message = "No file provided."
                };
            }

            if (file.Length > MaxFileSize)
            {
                return new ImageUploadResponseDto
                {
                    Status = Level.Failed,
                    Code = 400,
                    Message = "File size exceeds 5MB limit."
                };
            }

            if (!AllowedMimeTypes.Contains(file.ContentType))
            {
                return new ImageUploadResponseDto
                {
                    Status = Level.Failed,
                    Code = 400,
                    Message = $"File type '{file.ContentType}' is not allowed. Allowed types: JPEG, PNG, GIF, WebP, SVG."
                };
            }

            using var stream = file.OpenReadStream();
            var uploadParams = new ImageUploadParams
            {
                File = new FileDescription(file.FileName, stream),
                Folder = folder,
                Transformation = new Transformation().Quality("auto").FetchFormat("auto")
            };

            var uploadResult = await _cloudinary.UploadAsync(uploadParams);

            if (uploadResult.Error != null)
            {
                return new ImageUploadResponseDto
                {
                    Status = Level.Failed,
                    Code = 500,
                    Message = $"Upload failed: {uploadResult.Error.Message}"
                };
            }

            return new ImageUploadResponseDto
            {
                Status = Level.Success,
                Code = 200,
                Message = "Image uploaded successfully.",
                Url = uploadResult.SecureUrl.ToString(),
                PublicId = uploadResult.PublicId,
                FileName = file.FileName,
                Size = file.Length
            };
        }

        public async Task<Common> DeleteImageAsync(string publicId)
        {
            if (string.IsNullOrWhiteSpace(publicId))
            {
                return new Common
                {
                    Status = Level.Failed,
                    Code = 400,
                    Message = "Public ID is required."
                };
            }

            var deleteParams = new DeletionParams(publicId);
            var result = await _cloudinary.DestroyAsync(deleteParams);

            if (result.Result == "ok")
            {
                return new Common
                {
                    Status = Level.Success,
                    Code = 200,
                    Message = "Image deleted successfully."
                };
            }

            return new Common
            {
                Status = Level.Failed,
                Code = 500,
                Message = $"Failed to delete image: {result.Result}"
            };
        }
    }
}
