using NUnit.Framework;

namespace TestProject;

public class RobotTest
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        // arrange
        var manager = new BookManager();

        // sut
        var result = manager.GetBookById(1);

        // assert
        Assert.AreEqual("IT", result.Title);
    }


}

public interface IRobot
{
    void Forward();
    void Backward();
    void Left();
    void Right();
}

public class Robot : IRobot
{
    public void Backward()
    {
        throw new System.NotImplementedException();
    }

    public void Forward()
    {
        throw new System.NotImplementedException();
    }

    public void Left()
    {
        throw new System.NotImplementedException();
    }

    public void Right()
    {
        throw new System.NotImplementedException();
    }
}