
const express = require("express");
const app = require("../server");
const { getAll, getById, create, update, remove, changeGeneration } = require("../usecases/mentor.usecase")

const router = express.Router()

// mentor
router.get("/", async (request, response) => {
  try {
    const mentors = await getAll(); // useCase

    response.json({
      success: true,
      data: {
        mentors
      }
    })
  }catch(err) {
    response.status(400)
    response.json({
      success: false,
      message: err.message
    })
  }
})

// GetByID
// koders/:id
router.get("/:id", async (request, response) => {
  // Tratamos nuestras sean lo mas tontas posibles
  const { id } = request.params

  try {
    const mentor = await getById(id)
    response.json({
      success: true,
      data: {
        mentor
      }
    })
  } catch(error) {
    // No se encontro
    response.status(error.status || 500) // Not found
    response.json({
      success:false,
      message: error.message
    })
  }
})

// koders/
router.post("/", async (request, response) => {
  // request.body
  try {
    const mentor = await create(request.body)
    response.status(201)
    response.json({
      success: true,
      data: {
        mentor
      }
    })

  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete("/:id", async (request, response) => {
  try {
    await remove(request.params.id)
    response.json({
      success: true,
      message: "Mentor was deleted..."
    })

  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

/*
router.patch("/:id", async (request, response) => {
  try {
    const mentor = await update(request.params.id, request.body)
    response.json({
      success: true,
      data: {
        mentor
      }
    })

  } catch(error) {
    response.status(404)
    response.json({
      success: false,
      message: error.message
    })
  }
})
*/


router.patch("/:id", async(request, response) => {
    const { id } = request.params
    const { body } = request
    try {
      const mentor = await changeGeneration(id, body)
  
      response.json({
        success: true,
        mentorActualizado: mentor
      })
    }catch(error) {
      response.status(error.status || 500)
      response.json({
        success:false,
        message: error.message
      })
    }
  })
  


// 5 Endpoints
module.exports = router

// Router -> algo qiue tiene muchas rutas, pero estas encapsuladas en el router
