import React from 'react'
import '../box/cardBox.css'

function CardBox() {
  const fill = document.querySelector('.fill')
  const empties = document.querySelectorAll('.empty')

  React.useEffect(() => {
    window.addEventListener('dragstart', dragStart)
    window.addEventListener('dragend', dragEnd)

    return () => {
      window.removeEventListener('dragstart', dragStart)
    }
  }, [])

  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
  }

  function dragStart() {
    this.className += ' hold'
    this.className = 'invisible'
  }
  function dragEnd() {
    console.log('Drag End')
  }
  function dragOver() {
    console.log('Drag Over')
  }
  function dragEnter() {
    console.log('Drag Enter')
  }
  function dragLeave() {
    console.log('Drag Leave')
  }
  function dragDrop() {
    console.log('Drag Drop')
  }
  return (
    <div className="container-fluid">
      <div className="empty">
        <div className="fill" draggable="true"></div>
      </div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
    </div>
  )
}

export default CardBox
