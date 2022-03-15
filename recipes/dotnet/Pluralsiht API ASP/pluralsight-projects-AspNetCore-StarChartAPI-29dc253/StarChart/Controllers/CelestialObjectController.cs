using System.Linq;
using Microsoft.AspNetCore.Mvc;
using StarChart.Data;
using StarChart.Models;

namespace StarChart.Controllers
{
    [Route("")]
    [ApiController]
    public class CelestialObjectController : ControllerBase
    {

        private readonly ApplicationDbContext _context;


        public CelestialObjectController(ApplicationDbContext c)
        {
            _context = c;
        }

        [HttpGet("{id:int}", Name = "GetById")]
        public IActionResult GetById(int id)
        {
            var found = _context.CelestialObjects.Find(id);

            if (found == null) { return NotFound(); }

            found.Satellites = _context.CelestialObjects.Where(op => op.OrbitedObjectId == id).ToList();
            return Ok(found);

        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var found = _context.CelestialObjects.Where(op => op.Name == name).ToList();
            if (!found.Any()) { return NotFound(); }
            foreach (var obj in found)
            {
                obj.Satellites = _context.CelestialObjects.Where(op => op.OrbitedObjectId == obj.Id).ToList();

            }
            return Ok(found);


        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var found = _context.CelestialObjects.ToList();
            if (!found.Any()) { return NotFound(); }
            foreach (var obj in found)
            {
                obj.Satellites = _context.CelestialObjects.Where(op => op.OrbitedObjectId == obj.Id).ToList();

            }
            return Ok(found);


        }

        [HttpPost]
        public IActionResult Create([FromBody] CelestialObject c)
        {
            _context.CelestialObjects.Add(c);
            _context.SaveChanges();

            return CreatedAtRoute("GetById", new { id = c.Id }, c);
        }

        [HttpPut("id:int")]
        public IActionResult Update(int id, CelestialObject c)
        {
            var existing = _context.CelestialObjects.Find(id);
            if (existing == null)
            {
                return NotFound();

            }
            else
            {
                existing.Name = c.Name;
                existing.OrbitalPeriod = c.OrbitalPeriod;
                existing.OrbitedObjectId = c.OrbitedObjectId;
                _context.CelestialObjects.Update(existing);
                _context.SaveChanges();
                return NoContent();

            }
        }

        [HttpPatch("{id}/{name}")]
        public IActionResult RenameObject(int id, string name)
        {
            var existingObject = _context.CelestialObjects.Find(id);
            if (existingObject == null)
                return NotFound();
            existingObject.Name = name;
            _context.CelestialObjects.Update(existingObject);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var celestialObjects = _context.CelestialObjects.Where(e => e.Id == id || e.OrbitedObjectId == id);
            if (!celestialObjects.Any())
                return NotFound();
            _context.CelestialObjects.RemoveRange(celestialObjects);
            _context.SaveChanges();
            return NoContent();
        }



    }
}
