let ol = document.querySelector( 'ol' );
let input = document.querySelector( 'input' );
let btn = document.querySelector( '.add' );

function ipEnter ()
{
    if ( !input.value.trim() ) return;
    let li = document.createElement( 'li' );
    li.innerHTML = `<span>${ input.value }  </span>  <button onclick=deleteLI(this)> Delete</button> <button onclick=toggleMark(this)> check</button>`;
    ol.appendChild( li );
    input.value = null
}

function deleteLI ( ele )
{
    ele.parentElement.remove()
}
function deleteRow ( ele )
{
    ele.parentElement.parentElement.remove()
}
function toggleMark ( ele )
{
    ele.parentElement.querySelector( 'span' ).classList.toggle( 'mark' )
}




/* ========================================================================================== */

let form = document.querySelector( 'form' );
let tableBody = document.querySelector( 'tbody' );
let id = document.querySelector( 'input#userID' );
let userName = document.querySelector( 'input#userName' );
let course = document.querySelector( 'input#course' );
let payment = document.querySelector( 'input#payment' );
let newStd = document.querySelector( '.newStd' );

function checkSTD ( ele )
{
    ele.parentElement.parentElement.classList.toggle( 'check' )
}

form.addEventListener('submit', (ev)=>

{
    event.preventDefault()
    tableBody.innerHTML += `
            <tr>
                <td>${ id.value }</td>
                <td>${ userName.value }</td>
                <td>${ course.value }</td>
                <td>${ payment.value }</td>
                <td>
                    <button class="del-btn" onclick="deleteRow(this)">delete</button>
                    <button class="check-btn" onclick="checkSTD(this)">check </button>

                </td>
            </tr>

`;
    form.reset()
})

