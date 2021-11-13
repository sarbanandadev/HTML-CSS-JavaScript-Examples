let empName = document.querySelector('#empName'),
  empCode = document.querySelector('#empCode'),
  empSalary = document.querySelector('#empSalary'),
  empCity = document.querySelector('#empCity'),
  empList = document.querySelector('#empList'),
  validationError = document.querySelector('#validationError'),
  selectedRow = null

function onFormSubmit() {
  if (validate()) {
    let formData = readFormData()
    if (selectedRow == null) {
      insertNewRecord(formData)
    } else {
      updateRecord(formData)
      resetForm()
    }
    resetForm()
  }
}

function readFormData() {
  let formData = {}
  formData['empName'] = empName.value
  formData['empCode'] = empCode.value
  formData['empSalary'] = empSalary.value
  formData['empCity'] = empCity.value
  return formData
}

function insertNewRecord(data) {
  let table = empList.getElementsByTagName('tbody')[0],
    newRow = table.insertRow(table.length),
    editBtn = '<a onClick="onEdit(this)">Edit</a>',
    deleteBtn = '<a onClick="onDelete(this)">Delete</a>'

  cell1 = newRow.insertCell(0)
  cell1.innerHTML = data.empName
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.empCode
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.empSalary
  cell4 = newRow.insertCell(3)
  cell4.innerHTML = data.empCity
  cell4 = newRow.insertCell(4)
  cell4.innerHTML = editBtn + deleteBtn
}

function resetForm() {
  empName.value = ''
  empCode.value = ''
  empSalary.value = ''
  empCity.value = ''
  selectedRow = null
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement
  empName.value = selectedRow.cells[0].innerHTML
  empCode.value = selectedRow.cells[1].innerHTML
  empSalary.value = selectedRow.cells[2].innerHTML
  empCity.value = selectedRow.cells[3].innerHTML
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.empName
  selectedRow.cells[1].innerHTML = formData.empCode
  selectedRow.cells[2].innerHTML = formData.empSalary
  selectedRow.cells[3].innerHTML = formData.empCity
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record?')) {
    row = td.parentElement.parentElement
    empList.deleteRow(row.rowIndex)
    resetForm()
  }
}

function validate() {
  isValid = true
  if (empName.value == '') {
    isValid = false
    validationError.classList.remove('hide')
  } else {
    isValid = true
    if (!validationError.classList.contains('hide'))
      validationError.classList.add('hide')
  }
  return isValid
}