# polling-system-api
A polling system, only API based.
<h1>Features</h1>
<ul>
  <li>Create a question (you can add as many questions as you want)</li>
  <li>Add options to a question</li>
  <li>Add a vote to an option of question</li>
  <li>Delete a question </li>
  <li>Delete an option </li>
  <li>View a question with it’s options and all the votes given to it</li>
</ul>
<h1>Required Routes</h1>
<ul>
  <li>/questions/create (To create a question)</li>
  <li>/questions/:id/options/create (To add options to a specific question)</li>
  <li>/questions/:id/delete (To delete a question)</li>
  <li>/options/:id/delete (To delete an option)</li>
  <li>/options/:id/add_vote (To increment the count of votes)</li>
  <li>/questions/:id (To view a question and it’s options)</li>
</ul>
## 🚀 Live Demo

[Click here to view the deployed app](https://polling-system-th6r.onrender.com)
