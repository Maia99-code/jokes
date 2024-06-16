const Joke = require("../models/jokes.models");

exports.obtenerTodos = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: "Broma no encontrada" });
    }
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.crearUno = async (req, res) => {
  const { setup, punchline } = req.body;
  const nuevaBroma = new Joke({ setup, punchline });
  try {
    const bromaGuardada = await nuevaBroma.save();
    res.status(201).json(bromaGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.actualizarUno = async (req, res) => {
  const { setup, punchline } = req.body;
  try {
    const broma = await Joke.findById(req.params.id);
    if (!broma) {
      return res.status(404).json({ message: "Broma no encontrada" });
    }
    broma.setup = setup;
    broma.punchline = punchline;
    const bromaActualizada = await broma.save();
    res.status(200).json(bromaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarUno = async (req, res) => {
  try {
    const broma = await Joke.findById(req.params.id);
    if (!broma) {
      return res.status(404).json({ message: "Broma no encontrada" });
    }
    await Joke.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Broma eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
