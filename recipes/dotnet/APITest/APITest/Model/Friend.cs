namespace APITest.Model
{
    public class Friend
    {

        public int id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string location { get; set; }
        public DateTime dateOfHire { get; set; }




        public Friend()
        {

        }


        public Friend(int id, string firstname, string lastname, string location, DateTime dateOfHire)
        {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.location = location;
            this.dateOfHire = dateOfHire;

        }
    }
}
