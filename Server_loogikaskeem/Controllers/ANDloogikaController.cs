using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Server_loogikaskeem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ANDloogikaController : ControllerBase
    {
        public void and_operatsioon(bool bool_1, bool bool_2)
        {
            bool answer;
            if (bool_1 == true && bool_2 == true)
            {
                answer = true;
            }
            else if (bool_1 == false || bool_2 == false)
            {
                answer = false;
            }
        }
    }
}
