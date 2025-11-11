const movieInput = document.getElementById("movieInput");
const addBtn = document.getElementById("addBtn");
const movieList = document.getElementById("movieList");
const movieCount = document.getElementById("movieCount");
const clearBtn = document.getElementById("clearBtn");

let movies = [];

addBtn.addEventListener("click", () => {
    const movieName = movieInput.value.trim();
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    movies.push(movieName);
    movieInput.value = "";
    updateList();
});

function updateList() {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
        const li = document.createElement("li");
        li.textContent = movie;
        li.addEventListener("click", () => removeMovie(index));
        movieList.appendChild(li);
    });
    movieCount.textContent = `Total Movies: ${movies.length}`;
}


function removeMovie(index) {
    if (confirm(`Remove "${movies[index]}" from the list?`)) {
        movies.splice(index, 1);
        updateList();
    }
}

clearBtn.addEventListener("click", () => {
    if (movies.length === 0) return;
    if (confirm("Are you sure you want to clear the entire list?")) {
        movies = [];
        updateList();
    }
});
