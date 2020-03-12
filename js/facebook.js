"use strict";

// uzklausiame duomenu
// console.log(feed);

// panaudojame duomenis turinio generavimui
function renderFeed( data ) {
    if ( !Array.isArray(data) ) {
        return console.error('Duok array\'ju!!!');
    }

    let HTML = '';

    for ( let i=0; i<data.length; i++ ) {
        const postData = data[i];
        HTML += renderPost(postData);
    }

    return document.querySelector('.feed').innerHTML = HTML;
}

function renderPost( data ) {
    console.log('-----------------');
    let HTML = `<div class="post">
                    ${renderPostHeader( data.author, data.time )}
                    ${renderPostContent( data.content )}
                    ${renderPostFooter()}
                </div>`;
    return HTML;
}

function renderPostHeader( author, time ) {
    console.log(author);
    console.log(time);
    
    let HTML = '';

    HTML = `<div class="header">
                <img src="./img/${author.img}">
                <div class="texts">
                    <div class="title">
                        <a href="${author.link}">${author.name} ${author.surname}</a>
                    </div>
                    <div class="time">${time}</div>
                </div>
                <i class="fa fa-ellipsis-h"></i>
            </div>`;

    return HTML;
}

function renderPostContent( content ) {
    console.log(content);
    
    let HTML = '';

    HTML = '<div class="content">CONTENT</div>';

    return HTML;
}

function renderPostFooter() {
    return '<div class="footer">FOOTER</div>';
}

renderFeed( feed );