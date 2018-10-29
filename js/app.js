var main = function () {
    "use strict";

    // $('.comment-input button').click(function (event) {
    //     var $new_comment;
    //     if ($('.comment-input input').val() !== '') {
    //         $new_comment = $('<p>').text($('.comment-input input').val());
    //         $new_comment.hide();
    //         $('.comments').append($new_comment);
    //         $new_comment.fadeIn();
    //         $('.comment-input input').val('');
    //     }
    // });

    // $('.comment-input input').keypress(function (event) {
    //     var $new_comment;

    //     if (event.keyCode === 13) {
    //         $new_comment = $('<p>').text($('.comment-input input').val());
    //         $new_comment.hide();
    //         $('.comments').append($new_comment);
    //         $new_comment.fadeIn();
    //         $('.comment-input input').val('');
    //     }
    // })

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($('.comment-input input').val() !== '') {
            $new_comment = $('<p>').text($('.comment-input input').val());
            $new_comment.hide();
            $('.comments').append($new_comment);
            $new_comment.fadeIn();
            $('.comment-input input').val('');
        }
    };

    $('.comment-input button').click(function (event) {
        addCommentFromInputBox();
    });

    $('.comment-input input').keypress(function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);