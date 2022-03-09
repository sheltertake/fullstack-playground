using APITest.Model;
using APITest.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APITest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FriendsController : ControllerBase
    {
        private readonly FriendMemoryService service;

        public FriendsController(FriendMemoryService service)
        {
            this.service = service;
        }


        // GET: api/<FriendController>
        [HttpGet]
        public List<Friend> Get()
        {
            return service.Friends;
        }


        [HttpPost]
        public List<Friend> Post([FromBody] Friend friend)
        {
            service.Friends.Add(friend);


            return service.Friends;
        }

        // PUT: api/Friend/5
        [HttpPut("{id}")]
        public List<Friend> Put(int id, [FromBody] Friend friend)
        {
            Friend friendToUpdate = service.Friends.Find(f => f.id == id);
            int index = service.Friends.IndexOf(friendToUpdate);


            service.Friends[index].firstname = friend.firstname;
            service.Friends[index].lastname = friend.lastname;
            service.Friends[index].location = friend.location;
            service.Friends[index].dateOfHire = friend.dateOfHire;

            return service.Friends;
        }

        [HttpDelete("{id}")]
        public List<Friend> Delete(int id)
        {
            Friend friend = service.Friends.Find(f => f.id == id);
            service.Friends.Remove(friend);
            return service.Friends;
        }



    }
}
