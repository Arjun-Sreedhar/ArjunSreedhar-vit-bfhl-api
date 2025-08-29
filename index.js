import express from "express";

const app = express();
app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach(item => {
      if (!isNaN(item)) {
        const num = parseInt(item);
        if (!isNaN(num)) {
          sum += num;
          if (num % 2 === 0) even_numbers.push(item.toString());
          else odd_numbers.push(item.toString());
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const concat_string = alphabets.join("").split("").reverse().map((ch, i) => {
      return i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
    }).join("");

    

    return res.status(200).json({
      is_success: true,
      user_id: "arjun_sreedhar_28102003", 
      email: "arjunsn03@gmail.com",
      roll_number: "22BCT0303",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });

  } catch (err) {
    return res.status(500).json({ is_success: false, message: "Server Error" });
  }
});
let port=3000;
app.listen(port, () => console.log("Server running at http://localhost:3000/bfhl"));
