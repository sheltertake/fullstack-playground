using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EF_Book_001
{
    [Table("SalesLt", Schema = "Customer")]
    public partial class Customer
    {
        [Key]
        [Column("CustomerID")]
        public int CustomerID { get; set; }
        [Required]
        [StringLength(8)]
        public string NameStyle { get; set; }
        [StringLength(8)]
        public string Title { get; set; }
        [StringLength(55)]
        public string FirstName { get; set; }
        [StringLength(55)]
        public string MiddleName { get; set; }
        [StringLength(55)]
        public string LastName { get; set; }
        [StringLength(10)]
        public string Suffix { get; set; }
        [StringLength(128)]
        public string CompanyName { get; set; }
        [StringLength(256)]
        public string SalesPerson { get; set; }
        [StringLength(50)]
        public string EmailAddress { get; set; }
        [StringLength(10)]
        public string Phone { get; set; }
        [Column("rowguid")]
        public Guid Rowguid { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime ModifiedDate { get; set; }

        //[ForeignKey(nameof(CustomerID))]

    }
}
