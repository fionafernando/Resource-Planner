document.Ready(function() {
    localforage.setItem('key', 'value').then(
        alert("DataSaved!")
);
});