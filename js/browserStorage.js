//var playerAddress = 'n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE'
var playerAddress = ''
var bStorageAvailable = false

class BrowserStorage {

    static storageTest() {
        try {
            var storage = window['localStorage'],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage.length !== 0;
        }
    }

    static retrieve() {
        if (bStorageAvailable) {
            var storage = window['localStorage']
            playerAddress = storage.getItem('address')
        } 
        return playerAddress
    }

    static setItem(key, val) {
        if (bStorageAvailable) {
            var storage = window['localStorage']
            storage.setItem(key, val)
        }
    } 

    static getItem(key) {
        if (bStorageAvailable) {
            var storage = window['localStorage']
            storage.getItem(key)
        }
    } 

    static logout() {
        if (bStorageAvailable) {
            var storage = window['localStorage']
            storage.clear()
        }
    }

    static login(address) {
        playerAddress = address
        if (bStorageAvailable) {
            var storage = window['localStorage']
            storage.setItem('address', playerAddress)
        }
    }
}

bStorageAvailable = BrowserStorage.storageTest()