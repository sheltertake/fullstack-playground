using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace CountWordsTest;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        var path = AppDomain.CurrentDomain.BaseDirectory + "txt/rfc5322.txt";
        var text = System.IO.File.ReadAllText(path);

        // Define a regular expression for repeated words.
        Regex rx = new Regex(@"[^(\d|\s|\W)]*",
          RegexOptions.Compiled | RegexOptions.IgnoreCase);

        // Find matches.
        MatchCollection matches = rx.Matches(text);

        // Report the number of matches found.
        Console.WriteLine("{0} matches found in:\n   {1}",
                          matches.Count,
                          text);

        string[] arr = matches.Cast<Match>().Select(m => m.Value.ToLower()).Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        Dictionary<string, int> dictionary = arr.GroupBy(x => x)
                                                .ToDictionary(g => g.Key, g => g.Count());

        Dictionary<string, int> ordered = dictionary.OrderByDescending(x => x.Value).ToDictionary(x => x.Key, x => x.Value);
    }
}