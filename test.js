
var arr = [{
    id: 0,
    name: 'Armenia',
    parentId: null
  }, {
    id: 1,
    name: 'Shirak',
    parentId: 0
  }, {
    id: 2,
    name: 'Lori',
    parentId: 0
  }, {
    id: 3,
    name: 'Tavush',
    parentId: 0
  }, {
    id: 4,
    name: 'Syuniq',
    parentId: 0
  }, {
    id: 5,
    name: 'Gyumri',
    parentId: 1
  }, {
    id: 6,
    name: 'Vanadzor',
    parentId: 2
  }, {
    id: 7,
    name: 'Ijevan',
    parentId: 3
  }, {
    id: 8,
    name: 'Goris',
    parentId: 4
  }, {
    id: 9,
    name: '58',
    parentId: 5
  }, {
    id: 10,
    name: 'Dimac',
    parentId: 6
  }, {
    id: 11,
    name: 'Rembaz',
    parentId: 7
  }, {
    id: 12,
    name: 'Getapnya',
    parentId: 8
  }]

  const arrToObj = (items, id = null) => items.filter(item => item.parentId === id) .map(item => ({...item,children : arrToObj(items,item.id)}))


function toHtml(data, isRoot = true) {
    const ul = document.createElement('ul')
  
    if (!isRoot) {
      ul.classList.add('hide')
    }
  
    data.forEach(e => {
      let isVisible = isRoot;
      const li = document.createElement('li')
      const text = document.createElement('span')
      const button = document.createElement('button')
  
      if (e.children) {
        button.textContent = '+'
        li.appendChild(button)
      }
  
      text.textContent = e.name
      li.appendChild(text)
  
      if (e.children) {
        const children = toHtml(e.children, false)
        li.appendChild(children)
  
        button.addEventListener('click', function() {
          if (isRoot) {
            isVisible = !isVisible
          }
  
          button.textContent = isVisible ? '+' : '-'
          children.classList.toggle('hide')
  
          if (!isRoot) {
            isVisible = !isVisible
          }
        })
      }
  
      ul.appendChild(li)
  
    })
  
    return ul;
  }
  
  const tree = arrToObj(arr)
  const html = toHtml(tree)
  
  document.body.appendChild(html)

//   let button = document.getElementById("searchBtn")
//   let input = document.getElementById("search")
//   button.addEventListener('click',()=> {findAndRemove(input,value)})

//   function findAndRemove (text){
//     document.querySelector(`.${text}`).replaceChildren()
//   }