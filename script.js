const tasks = [
  {id:1, title:"task 1", status: "completed"},
  {id:2, title:"task 2", status: "pending"},
  {id:3, title:"task 3", status: "completed"},
  {id:4, title:"task 4", status: "pending"},
  {id:4, title:"task 4", status: "not started"},
  ]
  const filterTasks = tasks.filter(task => task.status === "pending")
  console.log(filterTasks)
  
  const filterNotCompletedTasks = tasks.filter(task => task.status !== "completed")
  console.log(filterNotCompletedTasks)
  
  
  const books = [
  {id:1, title:"Book 1", year: 2005, noOfPages: 250},
  {id:2, title:"Book 2", year: 2010, noOfPages: 400},
  {id:3, title:"Book 3", year: 2015, noOfPages: 320},
  {id:4, title:"Book 4", year: 2008, noOfPages: 350}
  
  ]
  
  
  const filteredBooks = books.filter(book => book.year > 2010 && book.noOfPages > 300);
  console.log(filteredBooks);