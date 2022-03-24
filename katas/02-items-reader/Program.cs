var itemsReader = new ItemsReader();

public sealed class ItemsReader
{
    private ISqlRepository _dbRepository;
  
    //Stores number of times we run DisplayItems
    internal static int NumberOfRuns = 0;
  
    public ItemsReader()
    {
        _dbRepository = new ReadonlyRepository();
    }
     
    //Loads items from the DB by code and outputs them to Console
    public async Task DisplayItems(List<string> codes)
    {
        try
        {
            List<Item> items = new();
  
            foreach (var code in codes)
            {
                var item = _dbRepository.ReadItemAsync(code).Result;
                if (item != null && item.Name.Trim() != "") {
                    items.Add(item.Name.Trim());
                }
            }
   
            items.ForEach(x => Console.WriteLine($"Result is :{x.Name}"));
        }
        catch (Exception e)
        {
            var methodName = System.Reflection.MethodBase.GetCurrentMethod()?.Name;
            Console.WriteLine($"{methodName} thrown exception: {e.Message}");
            throw e;
        }
  
        //Increment number of runs
        object lockObject = new object();
        lock (lockObject)
        {
            NumberOfRuns++;
        }
    }
}
  
public class Item
{
    public string Code { get; set; }
    public string Name { get; set; }
}
  
public class ReadonlyRepository : ISqlRepository
{
    var connectionString = Config.GetString("connectionString");
  
    public virtual async Task<Item?> ReadItemAsync(string code)
    {
        string sql = $"SELECT TOP 1 [Code], [Name] FROM [ItemTbl] WHERE [Code] LIKE '{code}'";
        var conn = new SqlConnection(connectionString);
        conn.Open();
        var result = await conn.QuerySingleOrDefaultAsync<Item>(sql);
        conn.Close();
        return result;
    }
  
    public Task WriteItemAsync(string code, string name)
    {
        throw new NotImplementedException();
    }
}
  
public interface ISqlRepository
{
    Task WriteItemAsync(string code, string name);
    Task<Item?> ReadItemAsync(string code);
}