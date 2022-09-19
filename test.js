var arr = [
  {
    id: 0,
    name: "Armenia",
    parentId: null,
  },
  {
    id: 1,
    name: "Shirak",
    parentId: 0,
  },
  {
    id: 2,
    name: "Lori",
    parentId: 0,
  },
  {
    id: 3,
    name: "Tavush",
    parentId: 0,
  },
  {
    id: 4,
    name: "Syuniq",
    parentId: 0,
  },
  {
    id: 5,
    name: "Gyumri",
    parentId: 1,
  },
  {
    id: 6,
    name: "Vanadzor",
    parentId: 2,
  },
  {
    id: 7,
    name: "Ijevan",
    parentId: 3,
  },
  {
    id: 8,
    name: "Goris",
    parentId: 4,
  },
  {
    id: 9,
    name: "58",
    parentId: 5,
  },
  {
    id: 10,
    name: "Dimac",
    parentId: 6,
  },
  {
    id: 11,
    name: "Rembaz",
    parentId: 7,
  },
  {
    id: 12,
    name: "Getapnya",
    parentId: 8,
  },
];

const arrToObj = (items, id = null) =>
  items
    .filter((item) => item.parentId === id)
    .map((item) => ({ ...item, children: arrToObj(items, item.id) }));

function toHtml(data, isRoot = true) {
  const ul = document.createElement("ul");

  if (!isRoot) {
    ul.classList.add("hide");
  }




  data.forEach((e) => {
    let isVisible = isRoot;
    const li = document.createElement("li");
    const text = document.createElement("span");

    if (e.children) {
      li.appendChild(text);
    }

    text.textContent = e.name;
    li.appendChild(text);

    if (e.children) {
      const children = toHtml(e.children, false);
      li.appendChild(children);

      text.addEventListener("click", function () {
        if (isRoot) {
          isVisible = !isVisible;
        }

        children.classList.toggle("hide");

        if (!isRoot) {
          isVisible = !isVisible;
        }
      });
    }

    ul.appendChild(li);
  });

  return ul;
}

const tree = arrToObj(arr);
const html = toHtml(tree);
let div = document.createElement("tree");
document.body.appendChild(html);

function search(item){
  var collection = document.getElementsByTagName("li");
  for (i = 0;i < collection.length; i++){
      if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
          collection[i].style.display = ("block");
          } else {
              collection[i].style.display = "none";
              }
  }
}
/*
function search(){
  let input = document.getElementById("searchBar").value
  input=input.toLowerCase();
  
  
  console.log(input)
}
  */

// function search() {
//   let input = document.getElementById("searchbar").value;
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName("Armenia");

//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = "none";
//     } else {
//       x[i].style.display = "onclick";
//     }
//   }
// }
