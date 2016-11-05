
var template = function(id) {
    return _.template( $('#' + id).html());
};

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president',
        words: 'Hello,World'
    }
});

var person = new Person();

var PeopleCollection = Backbone.Collection.extend({
    model:Person
});

var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {

    },

    render: function() {
        this.collection.each(function(person) {
            //console.log(person);
            var personView=new PersonView({model:person});
            //console.log(personView);
            this.$el.append(personView.render().el);

        }, this);

    return this;
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    //template: _.template('<strong>Меня зовут <%=name%>, мне <%=age%> лет, моя профессия <%=job%> и я говорю - <%=words%> !</strong>'),
    template: template('person-id'),
   // mytemplate: _.template($('#myperson-id').html()),

    //template: '#person-id',
    //mytemplate: '#myperson-id',

    initialize: function() {
        console.log("иницилизация");
        this.render();
    },

    render: function() {
        console.log("рендор");
        //this.$el.html(this.template(this.model.toJSON()) + this.mytemplate(this.model.toJSON()));
        // var template = _.template( $(this.template).html());
        // var mytemplate = _.template( $(this.mytemplate).html());
        this.$el.html(this.template(this.model.toJSON()));
        //this.$el.html(template(this.model.toJSON()) + mytemplate(this.model.toJSON()));
        //this.$el.html(this.mytemplate(this.model.toJSON()));
        //$(document.body).append(this.el);
        return this;
    }
});

var peopleCollection = new PeopleCollection([
    {
        name: 'Ivan',
        age: 23,
        job: 'Taxi driver'
    },
    {
        name: 'Anna',
        age: 20,
        job: 'student'
    },
    {
        name: 'Pavel',
        job: 'Builder'
    }
]);

var peopleView = new PeopleView({collection: peopleCollection});

$(document.body).append(peopleView.render().el);

//var person = new Person;
//var personView = new PersonView({model: person});
//
//var person2 = new Person({'name': 'Semen', 'age': '666'});
//var personView2 = new PersonView({model: person2});
//
//peopleCollection.add(person);
//peopleCollection.add(person2);

//CONSOLE COMMANDS
//personView;
//personView.el;
//personView.render();
//personView.el;