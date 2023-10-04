using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server_loogikaskeem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NOTloogikaController : ControllerBase
    {
        public void not_operatsioon(bool bool_1)
        {
            bool answer;

            if (bool_1 == true)
            {
                answer = false;
            }
            else if (bool_1 == false)
            {
                answer = true;
            }
            

        }
    }
}
