import './index.css';
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user  => {
        usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>
            </tr>`
    });


    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');
    
    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const ele = event.target;
            event.preventDefault();
            deleteUser(ele.attributes["data-id"].value);
            const row = ele.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});

