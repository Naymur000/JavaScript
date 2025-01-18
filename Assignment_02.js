const searchPlayer = () => {
    document.getElementById('search-player').addEventListener('click', evt = () => {
        const playerName = document.getElementById('player-name').value;
        document.getElementById('player-name').value = '';
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`)
            .then(res => res.json())
            .then(data => displayPlayer(data.player))
            .catch(error => console.log(error));
    });
}
 
let cart = [];
let cartCount = 0, male = 0;

const displayPlayer = (players) => {
    const playerContainer = document.getElementById('player-container');
    if (players === null) {
        playerContainer.innerHTML = `
            <h3>Player not found</h3>
        `;
    }
    else {
        playerContainer.innerHTML = '';
        players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.classList.add('card-holder');
            playerDiv.innerHTML = `
                <div class="card">
                    <div class="img-container">
                        <img src="${player.strThumb}" class="card-img" alt="${player.strPlayer}'s image">
                    </div>
                    <div>
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">Sport: ${player.strSport}</p>
                        <p class="card-text">National Team: ${player.strNationality}</p>
                        <p class="card-text">Club: ${player.strTeam}</p>
                        <p class="card-text">Gender: ${player.strGender}</p>
                        <div class="social-media">
                            <a href="https://${player.strFacebook}" target="_blank"><i class="fab fa-facebook icon"  style="color: #214799"></i></a>
                            <a href="https://${player.strTwitter}" target="_blank"><i class="fab fa-twitter icon" style="color: #214799"></i></a>
                            <a href="https://${player.strInstagram}" target="_blank"><i class="fab fa-instagram icon" style="color: #E1306C"></i></a>
                        </div>
                        <button class="btn btn-primary cart-btn">Add to Cart</button>

                        <!-- Button trigger modal -->
                        <button class="btn btn-primary details-btn" data-toggle="modal" data-target="#exampleModalLong">Details</button>
                    </div>
                </div>
            `;

            // Add to Cart

            const cartBtn = playerDiv.querySelector('.cart-btn');
            cartBtn.addEventListener('click', () => {
                handleAddToCart(player, cartBtn);
            });

            playerContainer.appendChild(playerDiv);

            // Details

            const detailsBtn = playerDiv.querySelector('.details-btn');
            detailsBtn.addEventListener('click', evt = () => {
                const modalBody = document.getElementById('modal-body');
                modalBody.innerHTML = '';
                displayPlayerDetails(player, modalBody);
            });

        });
    }
}

const handleAddToCart = (player, value) => {
    const cartMainContainer = document.getElementById('cart-main-container');

    if (cartCount < 11) {
        cartCount++;
        if (player.strGender == 'Male') {
            male++;
        }

        cart.push(player.strPlayer);
        UpdatePlayerList();

        const div = document.createElement('div');
        div.id = player.idPlayer;
        div.innerHTML = `
            <div class="card">
                    <div class="img-container">
                        <img src="${player.strThumb}" class="card-img" alt="${player.strPlayer}'s image">
                    </div>
                    <div>
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">Sport: ${player.strSport}</p>
                        <p class="card-text">National Team: ${player.strNationality}</p>
                        <button class="btn btn-danger remove-btn">Remove</button>
                    </div>
                </div>
        `;

        // Remove from Cart

        const removeBtn = div.querySelector('.remove-btn');
        removeBtn.addEventListener('click', evt = () => {
            handleRemoveCart(player, cartMainContainer, value);
        });

        cartMainContainer.appendChild(div);

        value.innerText = 'Added to Cart';
        value.style.backgroundColor = '#28a745';
        value.style.borderColor = '#28a745';
    }
    else if (cartCount === 11) {
        alert('!!! You can hire maximum 11 players !');
    }
}


const UpdatePlayerList = () => {
    const cartPlayer = document.getElementById('cart-player');
    let value = '';
    for (const player of cart) {
        value += player + ', ';
    }
    cartPlayer.innerText = value;
    const cartCountText = document.getElementById('cart-count');
    cartCountText.innerText = cartCount;
    const maleCountText = document.getElementById('male-count');
    maleCountText.innerText = male;
    const femaleCountText = document.getElementById('female-count');
    femaleCountText.innerText = cartCount - male;
}

handleRemoveCart = (player, cartMainContainer, value) => {
    cartCount--;
    if (player.strGender == 'Male') {
        male--;
    }

    let cart1 = [];
    cart1 = cart.filter((playerName) => playerName !== player.strPlayer);
    cart = cart1;
    UpdatePlayerList();
    cartMainContainer.removeChild(document.getElementById(player.idPlayer));
    value.innerText = 'Add to Cart';
    value.style.backgroundColor = '#007bff';
    value.style.borderColor = '#007bff';
    const cartCountText = document.getElementById('cart-count');
    cartCountText.innerText = cartCount;
}


displayPlayerDetails = (playerDetails, modalBody) => {
    const modalTitle = document.getElementById('exampleModalLongTitle');
    modalTitle.innerText = playerDetails.strPlayer;
    modalBody.innerHTML = `
                <div class="img-container">
                    <img src="${playerDetails.strThumb}" class="card-img" alt="${playerDetails.strPlayer}'s image">
                </div>
                <p>Sport: ${playerDetails.strSport}</p>
                <p>Height: ${playerDetails.strHeight}</p>
                <p>Weight: ${playerDetails.strWeight}</p>
                <p>Birth Date: ${playerDetails.dateBorn}</p>
                <p>Birth Place: ${playerDetails.strBirthLocation}</p>
                <p>Description: ${playerDetails?.strDescriptionEN ? playerDetails?.strDescriptionEN?.slice(0, 46) : ''}</p>
                <p>Salary: ${playerDetails.strWage}</p>
                <div class="social-media">
                    <a href="https://${playerDetails.strFacebook}" target="_blank"><i class="fab fa-facebook icon"style="color:rgb(29, 64, 139)" ></i></a>
                    <a href="https://${playerDetails.strTwitter}" target="_blank"><i class="fab fa-twitter icon" style="color:rgb(29, 64, 139)"></i></a>
                    <a href="https://${playerDetails.strInstagram}" target="_blank"><i class="fab fa-instagram icon" style="color:rgb(214, 40, 98)"></i></a>
                </div>
            `;
}


searchPlayer();
