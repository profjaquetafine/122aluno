var date = new Date()
let display_date = "Data:" + date.toLocaleDateString()

let predicted_emotion;

$(document).ready(function () {
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
    displayBot()
})

$(function () {
    $("#predict_button").click(function () {

        let input_data = {
            "text": $("#text").val()
        }
        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {

                predicted_emotion = result.data.predicted_emotion
                emotion_img_url=result.data.predicted_emotion_img_url
                
                //Envie a emoção prevista e a URL da imagem para o HTML
                $("#prediction").html(predicted_emotion)
                $("#emo_img_url").attr('src', emotion_img_url);

                //Defina a exibição 
                $('#prediction').css("display", "");
                $('#emo_img_url').css("display", "");

               //Habilite o botão Salvar
                $('#save_button').prop('disabled', false);
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });

    $("#save_button").click(function () {
        save_data = {
           
        }
        $.ajax({
         
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });

    });
})



function displayBot() {
    $('.chatbox__button').click(function () {
        $('.chatbox__chat').toggle()
    });
    //Inicie a conversa com o robô
    askBot()
}

function askBot() {
    $("#send_button").click(function () {

      

            let chat_input_data = {
                "user_bot_input_text": user_bot_input_text
            }

            $.ajax({
              
                    },
                    error: function (result) {
                        alert(result.responseJSON.message)
                    }
            });

        }

    })
    $('#bot_input_text').keypress(function(e){
        
        if(e.which == 13){         
            $('#send_button').click(); //Dispara o evento de clicar do botão Enviar
        }
    });
}
