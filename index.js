const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (item >= 'a' && item <= 'z') {  // Check if item is a lowercase alphabet
            if (highest_lowercase_alphabet === "" || item > highest_lowercase_alphabet) {
              highest_lowercase_alphabet = item;
            }
      }
    }
}

    res.json({
      is_success: true,
      user_id: "21BCE5524",
      email: "dhanunjayareddykurakula@gmail.com",
      roll_number: "21BCE5524",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});