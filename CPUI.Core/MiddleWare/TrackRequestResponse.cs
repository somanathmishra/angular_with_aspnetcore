using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPUI.Core.MiddleWare
{
  public class TrackRequestResponse
  {
    private readonly RequestDelegate _next;

    public TrackRequestResponse(RequestDelegate next)
    {
      _next = next;
    }

    public Task Invoke(HttpContext httpContext)
    {
      httpContext.Response.Cookies.Append("Device", "okkokkokk");
      httpContext.Response.Cookies.Append("SSIDName", httpContext.Request.Query["ssid"].ToString());
      httpContext.Response.Cookies.Append("ServerIp", httpContext.Request.Query["server_ip"].ToString());
     
      return _next(httpContext);
    }
  }
}
