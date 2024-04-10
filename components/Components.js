const Header = (info = []) => {
    const header = document.createElement('header')
    header.className = 'max-container' + ' ' + 'container-header'

    const divHeader1 = document.createElement('div')
    divHeader1.className = 'image-header'

    const imgHeader = document.createElement('img')
    imgHeader.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg'
    imgHeader.className = 'perfil'

    const divHeader2 = document.createElement('div')
    divHeader2.className = 'info-header'

    const h1Header = document.createElement('h1')
    h1Header.innerHTML = info[0]

    const p1Header = document.createElement('p')
    p1Header.innerHTML = info[1]

    const p2Header = document.createElement('p')
    p2Header.innerHTML = info[2]

    header.appendChild(divHeader1)
    header.appendChild(divHeader2)
    divHeader1.appendChild(imgHeader)
    divHeader2.appendChild(h1Header)
    divHeader2.appendChild(p1Header)
    divHeader2.appendChild(p2Header)

    document.body.appendChild(header)
}

const Row = () => {
    const div = document.createElement('div')
    div.className = 'max-container'

    const hr = document.createElement('hr')
    div.appendChild(hr)

    document.body.appendChild(div)
}

const About = (listItems = []) => {
    const section = document.createElement('section')
    section.className = 'max-container' + ' ' + 'container-about'

    const div = document.createElement('div')
    div.className = 'flex' + ' ' + 'sobre-mim'

    const img = document.createElement('img')
    img.style.width = '45px'
    img.src = 'https://camo.githubusercontent.com/c1761f1167f1e3b03f4f3b8da7177973b61a1cc7f002f5463ec99903c5de88ef/68747470733a2f2f7261772e6769746875622e636f6d2f656c697a61726f762f656c697a61726f762f6d61737465722f61626f75742e706e67'

    const h2 = document.createElement('h2')
    h2.textContent = 'Sobre mim'

    const ul = document.createElement('ul')
    const list = []
    for (let i = 0; i < listItems.length; i++) {
        const l = document.createElement('li')
        l.innerHTML = listItems[i]
        list.push(l)
    }

    section.appendChild(div)
    section.appendChild(ul)

    div.appendChild(img)
    div.appendChild(h2)

    for (const el of list) {
        ul.appendChild(el)
    }

    document.body.appendChild(section)
}

const Skills = () => {
    const section = document.createElement('section')
    section.className = 'max-container' + ' ' + 'container-skills'
    section.style.marginTop = 30 + 'px'

    const h2 = document.createElement('h2')
    h2.textContent = '🚀 Skills'

    section.appendChild(h2)
    document.body.appendChild(section)
}

const Details = (title, listItems = []) => {
    const details = document.createElement('details')
    details.className = 'max-container'
    details.style.marginTop = '15px'

    const summary = document.createElement('summary')
    summary.innerHTML = `<strong>${title}</strong>`

    const ul = document.createElement('ul')

    const lists = []
    for (let i = 0; i < listItems.length; i++) {
        const l = document.createElement('li')
        l.innerHTML = listItems[i]
        lists.push(l)
    }

    details.appendChild(summary)
    details.appendChild(ul)

    for (const li of lists) {
        ul.appendChild(li)
    }

    document.body.appendChild(details)
}

const Footer = (text) => {
    const section = document.createElement('div')
    section.className = 'footer'

    const div = document.createElement('div')
    div.className = 'max-container'

    const p = document.createElement('p')
    p.textContent = text

    section.appendChild(div)
    div.appendChild(p)

    document.body.appendChild(section)
}

