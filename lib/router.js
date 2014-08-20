/**
 * map URLs to specific templates in the {{renderPage}} helper
 */
Router.configure({
    layoutTemplate: 'layout'
});

var template = "";

Router.map(function() {
    this.route('homePage', {
        path: '/:_templ/:_user',
        data: function() {
            template = this.params._templ;
            // console.log(this.params._user);
            Session.set('form', template);
            Session.set('id', this.params._user);
            Session.set('started', new Date().getTime());
        },
        template: function() {
            // var template = this.params._templ;
            // console.log(template);
            if(template == "wye"){
                return 'report';
            }
            else if(template == "mmz"){
                return 'report';
            }
            else{
                return '';
            }
        }
    });
    this.route('thankyou', {template: 'submit'});
    this.route('information', {template:'studyInfo'});
    // this.route('home', {path: '/'});
});

var clear = function() {
    clearErrors();
    this.render(this.params);

    //this.stop();
    // pause();

};

var scrollTop = function(){
    jQuery('html','body').animate({scrollTop:0},0);
    $('body').scrollTop(0);
    $('html').scrollTop(0);
    $(window).scrollTop(0);
    window.scrollTo(0,0);
    // console.log("scroll Called");
};

Router.onBeforeAction(clear);
Router.onAfterAction(scrollTop, {only: ['thankyou']});