import React from 'react';
import './Companies.css'

const Companies = ()=>{
    return(
        <>
            <h6 className="trusted-companies-txt">Trusted by the top companies.</h6>
            <div className="trusted-companies ">
                <svg className="lyft" width="29.5px" height="21.2px" viewBox="0 0 29.5 21.2"  >
                <path d="M0 .462h5.925v16.156c0 2.563 1.14 4.076 2.068 4.724-.966.855-3.895 1.62-6.108-.226C.59 20.036 0 18.24 0 16.56V.462zm37.009 13.426v-1.7h1.817V6.246h-1.991C36.071 2.662 32.94 0 29.19 0c-4.311 0-7.82 3.565-7.82 7.946v13.877c1.228.177 2.697-.02 3.944-1.09 1.295-1.08 1.885-2.877 1.885-4.557v-.52h2.957V9.704H27.2V7.906c0-1.12.889-2.023 1.99-2.023 1.102 0 1.992.904 1.992 2.023v5.962c0 4.39 3.508 7.955 7.819 7.955v-5.932a1.994 1.994 0 0 1-1.991-2.003zM14.595 6.227v8.75a.909.909 0 0 1-.909.895.9.9 0 0 1-.899-.894V6.227H6.93V16.49c0 1.847.609 4.184 3.431 4.95 2.813.757 4.427-.825 4.427-.825-.155 1.041-1.102 1.808-2.658 1.965-1.18.117-2.677-.285-3.421-.6v5.442c1.904.58 3.914.766 5.905.363 3.586-.697 5.848-3.742 5.848-7.808V6.187h-5.867v.04z"></path>
                </svg> 
                <svg className="buzzfeed " width="79.6px" height="14px" viewBox="0 0 79.6 14">
                    <path d="M29.969 6.062v-2.01c.001-.072.013-.143.021-.236h7.993c0 .604.007 1.199-.007 1.793-.002.09-.09.184-.153.264-1.376 1.748-2.755 3.494-4.132 5.241-.068.086-.13.178-.235.326h.401c1.301 0 2.602.006 3.904-.005.241-.002.332.058.324.316-.017.648-.005 1.298-.005 1.966h-8.103c0-.647-.005-1.284.006-1.92.002-.08.085-.164.142-.237l3.968-5.05c.101-.128.2-.259.346-.448h-4.47zm-4.353-.003h-4.435V3.811H29.2c0 .425-.021.85.007 1.274.025.39-.094.691-.34.998-1.333 1.66-2.646 3.338-3.965 5.01-.071.09-.138.182-.249.327h4.6v2.291h-8.095c0-.625-.01-1.251.009-1.876.003-.107.11-.219.186-.316 1.354-1.725 2.71-3.448 4.065-5.172.056-.072.105-.15.2-.288zm46.436 5.55h1.441c1.69-.001 2.755-.954 2.944-2.637.136-1.209-.517-2.41-1.557-2.838-.916-.375-1.874-.176-2.828-.229v5.704zm-2.496 2.102v-.36-9.197c0-.403 0-.406.415-.403 1.437.014 2.88-.048 4.308.063 2.037.158 3.63 1.076 4.385 3.087.767 2.045.183 4.378-1.375 5.656-.918.753-1.999 1.124-3.162 1.165-1.477.054-2.958.017-4.437.018-.03 0-.06-.012-.134-.029zm-29.913.005V.017h9.521v1.33c0 .293-.02.59.006.881.025.29-.092.347-.359.346-1.879-.011-3.757-.006-5.636-.006h-.594v2.885h.354c1.417 0 2.834.008 4.251-.007.286-.003.353.088.347.359-.018.721-.006 1.444-.006 2.202h-4.968v5.71h-2.916zM14.927 14c-.315-.065-.633-.12-.945-.195-1.937-.462-3.08-1.913-3.082-3.907-.002-1.91 0-3.822 0-5.734v-.342h2.617v.365c0 1.806.005 3.612-.002 5.419-.004.82.246 1.513 1.022 1.87.841.386 1.702.372 2.48-.183.57-.405.73-1.027.732-1.695.004-1.796.001-3.591.001-5.387v-.395h2.59V9.84c-.002 2.281-1.42 3.85-3.695 4.088-.112.012-.222.047-.333.07L14.927 14zm46.618-6.212h4.821c.062-1.196-1.085-2.146-2.526-2.118-1.28.025-2.387 1.038-2.295 2.118zM63.675 14c-.429-.086-.863-.147-1.283-.263-2.004-.553-3.386-2.249-3.568-4.322-.172-1.955.394-3.612 1.963-4.845 2.376-1.87 7.047-1.445 7.975 2.977.066.317.106.642.126.965.02.344.004.69.004 1.087h-7.364c.064.552.279.997.634 1.364.815.842 1.831 1 2.93.807.7-.123 1.346-.389 1.927-.887l1.186 1.739c-.309.206-.589.425-.896.593-.763.418-1.59.639-2.455.72-.1.01-.198.043-.298.065h-.882zM55.72 7.79c.052-1.234-1.123-2.176-2.61-2.118-1.238.05-2.338 1.098-2.206 2.118h4.816zM53.03 14c-.347-.065-.699-.114-1.042-.197-2.689-.645-4.06-2.96-3.824-5.52.197-2.143 1.276-3.71 3.332-4.435 2.87-1.012 6.2.355 6.69 4.177.065.505.062 1.019.093 1.574h-7.413c.172.941.646 1.602 1.474 1.953 1.344.57 2.604.286 3.792-.479.07-.045.134-.099.203-.147.006-.005.02 0 .067 0 .364.534.739 1.087 1.16 1.708-.382.239-.735.498-1.12.691-.71.357-1.471.546-2.263.612-.09.007-.178.041-.267.063h-.882zM2.936 5.453c.86 0 1.675.001 2.49-.002.158 0 .318.001.471-.03.576-.115 1.01-.411 1.16-1.012.241-.958-.369-1.785-1.36-1.834-.46-.023-.922-.006-1.383-.007H2.957c-.01.1-.02.16-.02.22v2.665zm.02 5.672c.039.013.077.037.115.037.921.002 1.845.035 2.764-.009.952-.045 1.518-.63 1.543-1.493.025-.866-.498-1.491-1.43-1.603-.588-.07-1.19-.038-1.786-.047-.395-.005-.79 0-1.205 0v3.115zM0 .008c2.224.003 4.449-.03 6.672.02 1.713.04 3.056 1.205 3.345 2.796.327 1.8-.607 3.338-2.047 3.75-.037.011-.067.045-.116.08 1.373.393 2.193 1.302 2.424 2.665.38 2.248-.859 4.095-3.2 4.357-.52.058-1.046.056-1.57.059-1.836.01-3.672.01-5.508.013V.008z"></path>
                </svg>
               
                <svg className="asana " width="83px" height="20px" viewBox="0 0 83 20">
                    <path d="M13.296 9.43c-1.965 0-3.558 1.558-3.558 3.479s1.593 3.479 3.558 3.479c1.965 0 3.558-1.558 3.558-3.48 0-1.92-1.593-3.478-3.558-3.478zM7.116 12.91c0-1.922-1.593-3.48-3.558-3.48-1.966 0-3.559 1.558-3.559 3.48 0 1.92 1.593 3.478 3.559 3.478 1.965 0 3.558-1.557 3.558-3.479zM7.87.865c1.921 0 3.48 1.593 3.48 3.558 0 1.966-1.559 3.559-3.48 3.559-1.92 0-3.479-1.593-3.479-3.559 0-1.965 1.558-3.558 3.48-3.558zM26.785 11.219c-1.426 0-2.582-1.143-2.582-2.552 0-1.41 1.156-2.552 2.583-2.552 1.426 0 2.582 1.142 2.582 2.552 0 1.41-1.156 2.552-2.582 2.552zm2.59.323c0 .234.415.89.923.89h.328c.128 0 .232-.1.232-.224V5.225h-.001a.228.228 0 0 0-.23-.212h-1.02a.229.229 0 0 0-.23.212h-.001v.567c-.624-.743-1.608-1.051-2.594-1.051-2.243 0-4.06 1.757-4.06 3.926 0 2.168 1.817 3.926 4.06 3.926.986 0 2.061-.37 2.594-1.052v.002zm3.916-1c.68.455 1.422.677 2.135.677.68 0 1.382-.341 1.382-.934 0-.791-1.53-.914-2.492-1.23-.962-.316-1.79-.97-1.79-2.027 0-1.62 1.492-2.288 2.884-2.288.882 0 1.792.282 2.382.685.204.148.08.32.08.32l-.564.777c-.063.088-.194.158-.332.069-.38-.243-.803-.477-1.566-.477-.945 0-1.361.38-1.361.85 0 .564.665.741 1.444.933 1.357.354 2.838.78 2.838 2.388 0 1.427-1.38 2.308-2.905 2.308-1.155 0-2.14-.319-2.964-.904-.172-.166-.052-.32-.052-.32l.56-.775c.115-.145.258-.094.321-.052zm12.678 1c0 .234.414.89.921.89h.33c.127 0 .23-.1.23-.224V5.225a.229.229 0 0 0-.23-.212H46.2a.229.229 0 0 0-.23.212h-.001v.567c-.624-.743-1.608-1.051-2.594-1.051-2.243 0-4.061 1.757-4.061 3.926 0 2.168 1.818 3.926 4.06 3.926.987 0 2.062-.37 2.595-1.052v.001zm-2.59-.323c-1.427 0-2.583-1.143-2.583-2.552 0-1.41 1.156-2.552 2.582-2.552s2.583 1.142 2.583 2.552c0 1.41-1.157 2.552-2.583 2.552zm13.197.563V8.17c0-2.037-1.33-3.412-3.45-3.412-1.011 0-1.839.566-2.132 1.052v-.007l-.002.006c0-.492-.413-.778-.921-.778h-.327a.229.229 0 0 0-.232.224v6.984h.001a.228.228 0 0 0 .23.212h1.02c.015 0 .03-.002.045-.005l.02-.005.022-.007.026-.013.012-.007a.252.252 0 0 0 .029-.022l.005-.004a.219.219 0 0 0 .07-.15h.002V8.114c0-1.094.917-1.982 2.05-1.982 1.13 0 2.048.888 2.048 1.982v3.448l.001-.001v.678h.002a.228.228 0 0 0 .23.212h1.019c.016 0 .03-.002.046-.005.006 0 .011-.003.017-.005l.025-.007.024-.013.014-.007a.268.268 0 0 0 .027-.02l.007-.006a.218.218 0 0 0 .07-.149h.002v-.456zm7.942-.24c0 .234.414.89.921.89h.33c.127 0 .231-.1.231-.224V5.225h-.001a.229.229 0 0 0-.23-.212H64.75a.228.228 0 0 0-.23.212h-.002v.567c-.624-.743-1.608-1.051-2.595-1.051-2.242 0-4.06 1.757-4.06 3.926 0 2.168 1.818 3.926 4.06 3.926.987 0 2.062-.37 2.595-1.052v.001zm-2.59-.323c-1.427 0-2.583-1.143-2.583-2.552 0-1.41 1.156-2.552 2.583-2.552 1.425 0 2.581 1.142 2.581 2.552 0 1.41-1.156 2.552-2.581 2.552z"></path>
                </svg> 
               
                <svg className="one-plus "  width="80px" height="29px" viewBox="2 3 195 50">
                <path d="M79.1 37.1c0-3.9-1.8-7-5.4-7-3.6 0-5.5 3.1-5.5 7s1.8 7 5.5 7c3.7-.1 5.4-3.1 5.4-7m-14.9 0c0-5.9 3.7-10.3 9.5-10.3s9.5 4.4 9.5 10.3-3.7 10.2-9.5 10.2-9.5-4.3-9.5-10.2m22.4-9.9h4.1l6.6 11c.6 1.1 1.4 2.8 1.4 2.8h.1s-.1-2-.1-3.4V27.2h3.9v19.7h-3.9L91.9 36c-.6-1-1.4-2.7-1.4-2.7h-.1s.1 2.1.1 3.4v10.2h-3.9V27.2zm20.4 0h14.5v3.3H111v4.4h9.2v3.3H111v5.3h10.6v3.4H107zm22.6 9.3h4.1c2.1 0 3.2-1.2 3.2-2.9 0-1.8-1.2-2.9-3.1-2.9h-4.2v5.8zm-4.1-9.3h8.7c2.3 0 4 .7 5.2 1.8 1.1 1.1 1.8 2.7 1.8 4.5 0 3.7-2.5 6.2-6.6 6.2h-4.8v7.1h-4.1V27.2zm18.5 0h4v16.3h9.2v3.4H144zm15.4 13.3V27.2h4v13.4c0 2 1 3.5 3.7 3.5 2.5 0 3.7-1.5 3.7-3.5V27.2h4v13.4c0 4.2-2.6 6.7-7.6 6.7-5.2-.1-7.8-2.5-7.8-6.8m18.2.3h3.9c.3 2.4 1.6 3.3 4.4 3.3 2 0 3.8-.7 3.8-2.5 0-1.9-1.9-2.3-4.9-3-3.5-.8-6.8-1.7-6.8-5.8 0-3.9 3.2-5.9 7.5-5.9 4.4 0 7.3 2.2 7.6 6.1h-3.8c-.2-2-1.8-3-3.8-3-2.1 0-3.6.9-3.6 2.3 0 1.6 1.4 2.1 4.3 2.7 4.1.9 7.4 1.8 7.4 6.1 0 4-3.2 6.2-7.7 6.2-5.2 0-8.2-2.4-8.3-6.5M20 20.2v33.6h33.6V34.6h-3.7v15.5H23.7V24h15.5v-3.8zM49.9 14v6.2h-6.3V24h6.3v6.2h3.7V24h6.2v-3.8h-6.2V14z"></path>                
                </svg>
               
                <svg className="houseparty" width="110px" height="17px" viewBox="0 0 110 17">
                    <path fillRule="evenodd" d="M68.37 4.789c.892-.906 1.93-1.105 3.03-.791 1.481.424 2.292 1.555 2.565 3.05.23 1.26.132 2.503-.546 3.664-.949 1.62-3.078 2.33-4.685 1.17-.104-.075-.203-.247-.345-.172-.161.084-.092.28-.094.428-.007.641 0 1.283-.005 1.924-.004.536-.074.592-.58.576-.576-.02-1.151-.043-1.726.034-.556.075-.712-.071-.713-.66-.003-2.956.006-5.911-.005-8.866-.004-1.044-.142-1.09 1.027-1.075.41.005.819.007 1.228-.003.683-.016.683-.02.85.72zm27.316-.748h.084c.695.035 1.389-.019 2.085.014.45.022.643.2.767.618.335 1.134.7 2.26 1.057 3.387.032.1.087.193.181.398l.778-2.536c.15-.49.304-.98.455-1.47.073-.233.215-.374.462-.374.743-.002 1.486-.008 2.23-.001.435.004.399.272.285.579-.474 1.284-.944 2.57-1.42 3.854-.51 1.371-1.024 2.74-1.534 4.11-.575 1.548-1.74 2.235-3.334 2.027a5.647 5.647 0 0 1-1.648-.492c-.332-.152-.42-.383-.275-.716.192-.441.392-.88.583-1.322.126-.29.311-.358.582-.2.28.163.576.282.91.238.284-.037.413-.18.296-.481-.59-1.523-1.18-3.046-1.772-4.568-.338-.87-.678-1.738-1.017-2.607-.132-.338.003-.474.33-.458zm-60.82-.156c2.229-.142 4.235 1.581 4.408 3.884.124 1.665-.505 3.024-1.874 3.911-1.591 1.031-3.278 1.1-4.91.098-1.297-.797-2.065-2.041-2.04-3.602.028-1.69.814-3.02 2.313-3.819.774-.412 1.122-.473 2.102-.472zm15.986.223c1.526-.477 2.994-.242 4.391.529.262.144.355.328.206.609-.234.438-.47.874-.7 1.314-.135.256-.324.266-.532.124-.523-.355-1.133-.427-1.719-.577a.696.696 0 0 0-.225-.02c-.186.016-.389.049-.424.274-.034.22.166.279.319.334.572.206 1.148.398 1.721.602.157.055.312.122.457.205 1.175.666 1.56 1.444 1.355 2.725-.165 1.038-1.019 1.893-2.125 2.107-.371.071-.745.155-1.13.12-1.202-.032-2.336-.321-3.36-.994-.444-.29-.455-.396-.155-.86.193-.298.388-.596.562-.907.178-.32.375-.387.707-.202.68.378 1.38.722 2.186.695.091-.003.183-.004.272-.017.14-.02.278-.068.32-.223.049-.182-.105-.244-.22-.308-.351-.195-.745-.26-1.123-.366-.604-.17-1.183-.4-1.693-.778-.794-.588-1.003-1.418-.841-2.364.177-1.038.796-1.724 1.75-2.022zm8.398-.1c2.17-.53 4.14.214 4.926 2.714.183.58.194 1.163.207 1.757.009.415-.144.602-.56.592-.682-.017-1.364-.005-2.047-.005-.682.003-1.365 0-2.047.005-.128.002-.303-.058-.365.105-.055.145.086.253.156.369.357.586 1.44.545 1.98.359.184-.063.373-.162.513-.296.324-.31.597-.277.904.027.251.248.53.469.813.678.35.259.337.522.05.811-1.003 1.015-2.22 1.428-3.606 1.318-1.895-.149-3.327-1.35-3.73-3.218-.505-2.334.604-4.677 2.806-5.215zm-16.786.014c.608-.01.676.088.678.711.004 1.299-.007 2.597.009 3.896.008.729.384 1.06 1.072 1 .411-.035.669-.246.774-.667.09-.356.062-.715.063-1.073.004-1.049 0-2.097.003-3.145.002-.648.06-.694.672-.679a30.86 30.86 0 0 0 1.774.002c.418-.013.564.171.559.588-.014 1.189-.005 2.378-.005 3.567 0 1.158-.009 2.316.005 3.473.005.423-.155.594-.566.581-.651-.019-1.304-.007-1.956-.006-.278.001-.474-.084-.485-.418-.01-.341-.178-.27-.34-.114-.78.748-1.699.83-2.68.599-.739-.175-1.848-1.032-1.88-2.598-.036-1.736-.012-3.473-.01-5.21 0-.248.05-.51.36-.484.654.055 1.303-.013 1.953-.023zm34.97-.065c.964-.13 1.94-.14 2.884.166 1.32.427 2.12 1.516 2.16 3.034.04 1.531.005 3.065.014 4.597.002.389-.178.525-.533.52a60.531 60.531 0 0 0-1.865-.001c-.365.005-.67-.038-.514-.668-.986.774-1.94.982-3 .757-.84-.178-1.698-1.005-1.897-1.892-.22-.983.2-2.122.96-2.655 1.048-.734 2.198-.691 3.373-.512.169.026.387.16.495-.057.107-.218-.084-.378-.22-.518-.536-.551-1.214-.39-1.853-.354a3.059 3.059 0 0 0-1.061.244c-.352.156-.543.008-.635-.35a45.641 45.641 0 0 0-.383-1.396c-.08-.269.071-.363.27-.45.579-.253 1.193-.383 1.805-.465zm14.235-2.02l1 .001c.315.002.473.178.475.501.002.407.006.814.002 1.22-.003.255.093.366.355.352.332-.017.667.018 1 .001.305-.015.461.1.46.423-.004.532-.002 1.064-.004 1.596 0 .326-.16.49-.478.49-.318 0-.638.016-.955-.007-.283-.021-.382.097-.38.375.009.688-.013 1.377.01 2.065.024.714.396.962 1.075.756.71-.216.732-.2.733.581 0 .391-.006.782-.001 1.173.004.345-.164.554-.464.674a4.094 4.094 0 0 1-2.677.146c-.91-.252-1.564-1.161-1.59-2.169-.012-.516-.002-1.032-.002-1.548-.003-.563-.006-1.127-.002-1.69.002-.27-.087-.386-.378-.377-.516.015-.608-.097-.612-.628-.004-.422.018-.845.005-1.266-.012-.422.184-.625.573-.581.353.039.418-.142.414-.437-.006-.391.003-.783 0-1.174-.003-.31.147-.47.44-.472.667-.007 1.335-.007 2.002-.004zM28.806 1.65c.427-.01.598.184.596.62-.01 1.58-.004 3.159-.004 4.739.002 1.532.004 3.065.001 4.598-.001.611-.052.66-.655.663-.607.003-1.214-.01-1.82.005-.391.01-.546-.164-.541-.56.01-.938-.01-1.877.01-2.815.01-.412-.103-.598-.538-.582-.788.028-1.577.013-2.366.005-.33-.003-.439.133-.438.483.003.983-.03 1.966.053 2.948.032.369-.14.556-.507.548-.682-.013-1.364-.033-2.046-.026-.39.003-.54-.165-.54-.563.008-3.144.008-6.287.002-9.431 0-.428.156-.64.589-.632.636.012 1.274.015 1.91 0 .44-.012.597.217.595.632-.005.937.01 1.874-.016 2.81-.009.319.092.415.381.412a69.95 69.95 0 0 1 2.412.003c.372.008.515-.132.508-.519-.017-.891-.009-1.783-.003-2.674.003-.553.102-.655.642-.66.592-.008 1.183.01 1.775-.004zm59.357 2.299c.695-.189.904-.026.83.697-.064.612.037 1.218.05 1.826.01.416-.123.634-.56.665-1.211.087-1.81.748-1.88 2.243a36.17 36.17 0 0 0-.012 2.3c.006.409-.13.609-.553.596a36.621 36.621 0 0 0-1.91-.001c-.383.008-.554-.145-.552-.55.007-2.378.005-4.756.001-7.134 0-.417.151-.577.583-.545.587.044 1.18.002 1.772 0 .605 0 .626.024.657.659.005.09.02.178.043.388.45-.604.917-.978 1.53-1.144zM78.7 8.875h-.023c-.12.003-.242-.003-.362.004-.512.027-.763.314-.747.847.016.476.211.652.742.658.15.001.306.004.452-.027.443-.095.863-.668.797-1.114-.083-.56-.536-.294-.836-.367-.015-.003-.03 0-.046 0zM69.81 6.45c-.605-.039-1.097.27-1.384.87-.27.566-.177 1.51.195 1.956.407.489.976.666 1.515.473.61-.22.973-.804.976-1.576.005-1.003-.5-1.67-1.301-1.723zm-34.945.016c-.772-.032-1.437.722-1.459 1.654-.022.975.598 1.67 1.506 1.687.804.015 1.48-.722 1.484-1.62.004-.908-.688-1.686-1.53-1.721zm25.457-.262c-.486.008-.785.285-.982.705-.137.293-.027.449.284.452.257.003.515.001.772.001v.004h.68l.046-.002c.382-.03.457-.156.302-.507-.203-.456-.564-.661-1.102-.653zM15.686 7.653c.127 1.374-.166 2.859-.774 4.282-1.457 3.4-6.476 5.88-10.607 1.791C2.525 11.962 1.27 9.848.17 7.627a1.503 1.503 0 0 1-.153-.764c.019-.322-.148-.733.276-.905.431-.175.783.07 1.035.385.752.947 1.476 1.916 2.21 2.878.127.166.247.339.382.501.183.223.392.526.703.307.301-.21.139-.522-.031-.768-.331-.476-.67-.943-1.005-1.415-.825-1.156-1.66-2.3-2.467-3.47-.305-.443-.37-.942.048-1.368.337-.345.775-.353 1.156-.1.255.168.453.433.64.684.853 1.134 1.689 2.282 2.541 3.416.194.26.396.727.773.472.434-.297.017-.657-.164-.935-1.032-1.585-2.09-3.151-3.122-4.737-.247-.38-.592-.766-.253-1.292.47-.73 1.255-.69 1.855.156 1.063 1.5 2.094 3.025 3.14 4.538.15.215.287.443.453.645.162.195.343.484.64.275.282-.197.093-.486-.01-.713-.118-.261-.289-.5-.436-.748C7.76 3.604 7.139 2.54 6.52 1.472c-.221-.38-.404-.834-.023-1.146.362-.297.8-.094 1.158.173 1.318.99 2.071 2.425 2.968 3.75.369.543.695 1.115 1.065 1.656.177.26.415.53.77.447.346-.08.445-.392.523-.72.126-.533.261-1.07.562-1.544.253-.393.562-.736 1.074-.648.476.084.631.497.77.907.343 1.021.308 2.074.3 3.306"></path>
                </svg>
            </div>
        </>
    )
}

export default Companies;