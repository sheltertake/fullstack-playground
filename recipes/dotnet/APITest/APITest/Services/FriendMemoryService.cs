using APITest.Model;

namespace APITest.Services
{
    public class FriendMemoryService
    {
        public List<Friend> Friends = new List<Friend>();

        public FriendMemoryService()
        {
            Friends.Add(new Friend(1, "Kindson", "Munonye", "Budapest", DateTime.Today));
            Friends.Add(new Friend(2, "Oleander", "Yuba", "Nigeria", DateTime.Today));
            Friends.Add(new Friend(3, "Saffron", "Lawrence", "Lagos", DateTime.Today));
            Friends.Add(new Friend(4, "Jadon", "Munonye", "Asaba", DateTime.Today));
            Friends.Add(new Friend(5, "Solace", "Luca", "Paolo", DateTime.Today));
        }
    }
}
