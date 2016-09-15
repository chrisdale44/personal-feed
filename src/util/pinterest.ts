import PIN from './const';

declare var PDK:any;

// Initialize once with app id
PDK.init({ appId: PIN.APP, cookie: true });

/*
 *  Wrapper for all Pinterest SDK actions
 */
var Pinterest = {
    /*
     *  Use the SDK to login to Pinterest
     *  @param {Function} callback - function fired on completion
     */
    login: function(callback) {
        PDK.login({ scope : PIN.SCOPE }, callback);
    },
    /*
     *  Use the SDK to logout of Pinterest
     */
    logout: function() {
        PDK.logout();
    },
    /*
     *  Use DK to determine auth state of user
     *  @returns {Boolean}
     */
    loggedIn: function() {
        return !!PDK.getSession();
    },
    /*
     *  Use SDK to request current users boards
     *  @param {Function} callback - function fired on completion
     */
    myBoards: function(callback) {
        PDK.me('boards', { fields: PIN.FIELDS }, callback);
    },
    /*
     *  Use SDK to request current pins for a board
     *  @param
     *  @param {Function} callback - function fired on completion
     */
    myPins: function(callback) {
        PDK.me('pins', { fields: PIN.FIELDS }, callback);
    }
};

export default Pinterest;