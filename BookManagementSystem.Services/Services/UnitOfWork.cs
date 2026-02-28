using AutoMapper;
using BookManagementSystem.Domain.Entities;
using BookManagementSystem.Infrastructure;
using BookManagementSystem.Service.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace BookManagementSystem.Service.Services
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IOptions<MailSettings> _mailSettings;
        private readonly ApplicationDbContext _context;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger<User> _logger;
        private readonly ICommonService _commonService;
        private readonly IHttpClientFactory _httpClientFactory;
        public UnitOfWork(UserManager<User> userManager, IOptions<MailSettings> mailSettings,
            IHttpContextAccessor httpContextAccessor, IMapper mapper
            , IConfiguration configuration,
            ApplicationDbContext context,
            RoleManager<IdentityRole> roleManager,
            ILogger<User> logger,
            ICommonService commonService,
            IHttpClientFactory httpClientFactory)
        {
            _userManager = userManager;
            _mapper = mapper;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
            _mailSettings = mailSettings;
            _context = context;
            _roleManager = roleManager;
            _logger = logger;
            _commonService = commonService;
            _httpClientFactory = httpClientFactory;
        }
        public TokenService tokenService => new TokenService(_configuration, _httpContextAccessor);

        public UserManagementService userManagementService =>
            new UserManagementService(_userManager, _mapper,
                tokenService, mailService, _context, _roleManager, _logger, _commonService);

        public EmailManagerService mailService => new EmailManagerService(_mailSettings, _httpClientFactory);

        public DbHelperService dbHelperService => new DbHelperService(_configuration);

        public CommonService commonService => new CommonService(_context);

        public ProductService productService => new ProductService(_context);

        public BrandService brandService => new BrandService(_context);

        public ColorService colorService => new ColorService(_context);

        public OrderService orderService => new OrderService(_context);

        public AddressService addressService => new AddressService(_context);

        public CouponService couponService => new CouponService(_context);

        public WishlistService wishlistService => new WishlistService(_context);

        public CompareService compareService => new CompareService(_context);

        public CloudinaryService cloudinaryService => new CloudinaryService(_configuration);

        public DashboardService dashboardService => new DashboardService(_context);

        public AdminUserService adminUserService => new AdminUserService(_context, _userManager, _roleManager);
    }
}
