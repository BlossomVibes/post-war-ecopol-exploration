const a = 10
const b = 11
const c = 12
const d = 13
const e = 14
const f = 15
const g = 16
const h = 17
const i = 18
const j = 19



var fly = {

    tile_size: 60,

    /*
    
    Key variables:
    
    id       [required] - an integer that corresponds with a tile in the data array.
    color   [required] - any javascript compatible color variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.
    
    */
    
    keys: [
        { id: 0, solid: 0 },
    { id: 1, color: "#f0f", solid: 0},
    { id: 2, color: "#000", solid: 1, bounce: 0.35, friction: {x: 0.9, y: 0.3} },
    { id: 3, color: "#77F", friction: { x: 0.9, y: 0.9 }, gravity: { x: 0, y: 0.1 }, jump: 1, fore: 1},
    { id: 4, color: "#d0a", jump: 1 },
    { id: 5, color: "#d0a", solid: 1, bounce: 1.2 },
    { id: 6, color: "#000", solid: 1, bounce: 0 },
    { id: 7, color: "#70F", solid: 0, script: "change_color" },
    { id: 8, color: "#09f", solid: 0, script: "next_level" },
    { id: 9, color: "#f00", solid: 0, script: "death" },
    { id: a, color: '#000', solid: 1},
    { id: b, color: '#FF0', solid: 0, script: 'unlock'},
    { id: c, color: '#F0F', solid: 0, script: 'lock'},
    { id: d, color: '#0C0', solid: 0, script: 'unlockt'},
    { id: e, color: '#7FF', solid: 0, script: 'antideath'},  
    { id: f, color: '#77F', solid: 0, script: 'moredeath'},
    { id: g, color: '#0FF', solid: 0, script: 'teleport'}, 
    ],

    /* Ignore the error */
    data: [  
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,a,1,c,1,1,1,1,1,1,1,1,1,1,a,c,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,a,1,c,1,1,1,1,1,1,1,1,b,1,a,c,1,1,9,1,1,1,2,2,2,1,1,a,1,1,1,1,2,2,2,2,1,1,1,1,1,1,a,1,1,1,1,1,2,2,2],
[2,1,1,1,1,1,b,a,1,c,1,1,2,1,1,1,1,2,2,1,a,c,1,1,2,2,2,2,2,2,2,1,1,a,1,1,1,1,2,2,2,2,1,1,1,b,1,1,a,1,1,1,1,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,9,9,2,9,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,a,1,1,2,1,2,2,2,2,1,1,2,2,2,2,2,1,1,9,9,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,9,1,1,1,9,1,1,1,1,2,c,c,c,c,2,2,2,2,1,1,2,2,2,2,2,2,2,2,9,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,9,1,1,1,1,1,1,1,2,2,1,1,1,1,2,2,2,2,1,1,2,2,2,2,2,2,2,2,9,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,b,2,2,2,9,1,1,9,2,4,4,c,1,1,2,2,2,2,2,2,2,2,9,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,9,2,2,2,2,2,2,2,9,1,1,1,2,4,4,c,1,1,2,2,2,2,2,2,2,2,9,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,1,1,1,2,4,4,2,5,5,2,2,2,2,2,2,2,2,1,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,1,1,2,4,4,2,2,2,2,2,2,9,2,2,2,2,1,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,1,1,1,2,4,4,2,1,1,1,1,1,1,1,1,2,2,1,1,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,4,4,2,1,1,1,b,1,1,1,1,1,2,1,9,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,a,4,4,2,1,1,2,2,1,9,1,1,1,1,1,9,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,b,1,1,a,4,4,2,1,1,2,2,2,2,2,b,1,1,1,9,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2],
[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,8,2,2,2,2,2,2,2,2,2,2,2,2,2],

    ],

    /* Default gravity of the map */
    
    gravity: {
        x: 0,
        y: 0.3
    },
  
    fly: false,
    
    /* Velocity limits */

    vel_limit: {
        x: 40,
        y: 20
    },

    /* Movement speed when the key is pressed */
    
    movement_speed: {
        jump: 9,
        left: 0.5,
        right: 0.5
    },
    
    /* The coordinates at which the player spawns and the color of the player */

    player: {
        x: 1.5,
        y: 1.5,
        color: '#FF9900'
    },
      
    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        change_color: 'game.player.color = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        next_level: 'popuptext("You have successfully completed the exploration! Let\'s see what you remember. Once everyone is done, we will play a blooket."); screenblack()',
        death: 'game.load_map(fly); alert("You Died"); popuptext("You fell into lava")',
        unlock: 'unlock(false)',
        unlockt: 'unlock(true)',
        locker: 'game.current_map.keys[10].solid = 1;game.current_map.keys[10].color = "#000";game.current_map.keys[12].solid = 1;',
      lock: 'game.current_map.keys[10].solid = 1;game.current_map.keys[10].color = "#000"',
        fast: 'game.current_map.gravity.x = 0.95',
      superfast: 'game.current_map.gravity.x = 2.6',
        slow: 'game.current_map.gravity.x = 0.5',
      moredeath: 'game.current_map.keys[13].script = "death";game.current_map.keys[13].color = "#e00000"',
      antideath: 'game.current_map.keys[13].script = "";game.current_map.keys[13].color = "#f0f"',
      teleport: 'function setback(){game.current_map.keys[16].solid = 0}; game.current_map.keys[16].solid = 1; setTimeout(setback, 200)'
    }
};


var Clarity = function () {

    this.alert_errors   = false;
    this.log_info       = true;
    this.tile_size      = 16;
    this.limit_viewport = false;
    this.jump_switch    = 0;
    
    this.viewport = {
        x: 200,
        y: 200
    };
    
    this.camera = {
        x: 0,
        y: 0
    };
    
    this.key = {
        left: false,
        right: false,
        up: false
    };

    this.player = {

        loc: {
            x: 0,
            y: 0
        },
        
        vel: {
            x: 0,
            y: 0
        },
        
        can_jump: true
    };

    window.onkeydown = this.keydown.bind(this);
    window.onkeyup   = this.keyup.bind(this);
};

Clarity.prototype.error = function (message) {

    if (this.alert_errors) alert(message);
    if (this.log_info) console.log(message);
};

Clarity.prototype.log = function (message) {

    if (this.log_info) console.log(message);
};

Clarity.prototype.set_viewport = function (x, y) {

    this.viewport.x = x;
    this.viewport.y = y;
};

Clarity.prototype.keydown = function (e) {

    var _this = this;

    switch (e.keyCode) {
    case 37:
        _this.key.left = true;
        break;
    case 38:
        _this.key.up = true;
        break;
    case 39:
        _this.key.right = true;
        break;
    }
};

Clarity.prototype.keyup = function (e) {

    var _this = this;

    switch (e.keyCode) {
    case 37:
        _this.key.left = false;
        break;
    case 38:
        _this.key.up = false;
        break;
    case 39:
        _this.key.right = false;
        break;
    }
};

Clarity.prototype.load_map = function (map) {

    if (typeof map      === 'undefined'
     || typeof map.data === 'undefined'
     || typeof map.keys === 'undefined') {

        this.error('Error: Invalid map data!');

        return false;
    }

    this.current_map = map;

    this.current_map.background = map.background || '#333';
    this.current_map.gravity = map.gravity || {x: 0, y: 0.3};
    this.tile_size = map.tile_size || 16;

    var _this = this;
    
    this.current_map.width = 0;
    this.current_map.height = 0;

    map.keys.forEach(function (key) {

        map.data.forEach(function (row, y) {
            
            _this.current_map.height = Math.max(_this.current_map.height, y);

            row.forEach(function (tile, x) {
                
                _this.current_map.width = Math.max(_this.current_map.width, x);

                if (tile == key.id)
                    _this.current_map.data[y][x] = key;
            });
        });
    });
    
    this.current_map.width_p = this.current_map.width * this.tile_size;
    this.current_map.height_p = this.current_map.height * this.tile_size;

    this.player.loc.x = map.player.x * this.tile_size || 0;
    this.player.loc.y = map.player.y * this.tile_size || 0;
    this.player.color = map.player.color || '#000';
  
    this.key.left  = false;
    this.key.up    = false;
    this.key.right = false;
    
    this.camera = {
        x: 0,
        y: 0
    };
    
    this.player.vel = {
        x: 0,
        y: 0
    };

    this.log('Successfully loaded map data.');

    return true;
};

Clarity.prototype.get_tile = function (x, y) {

    return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
};

Clarity.prototype.draw_tile = function (x, y, tile, context) {

    if (!tile || !tile.color) return;

    context.fillStyle = tile.color;
    context.fillRect(
        x,
        y,
        this.tile_size,
        this.tile_size
    );
};

Clarity.prototype.draw_map = function (context, fore) {

    for (var y = 0; y < this.current_map.data.length; y++) {

        for (var x = 0; x < this.current_map.data[y].length; x++) {

            if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {

                var t_x = (x * this.tile_size) - this.camera.x;
                var t_y = (y * this.tile_size) - this.camera.y;
                
                if(t_x < -this.tile_size
                || t_y < -this.tile_size
                || t_x > this.viewport.x
                || t_y > this.viewport.y) continue;
                
                this.draw_tile(
                    t_x,
                    t_y,
                    this.current_map.data[y][x],
                    context
                );
            }
        }
    }

    if (!fore) this.draw_map(context, true);
};

Clarity.prototype.move_player = function () {

    var tX = this.player.loc.x + this.player.vel.x;
    var tY = this.player.loc.y + this.player.vel.y;

    var offset = Math.round((this.tile_size / 2) - 1);

    var tile = this.get_tile(
        Math.round(this.player.loc.x / this.tile_size),
        Math.round(this.player.loc.y / this.tile_size)
    );
     
    if(tile.gravity) {
        
        this.player.vel.x += tile.gravity.x;
        this.player.vel.y += tile.gravity.y;
        
    } else {
        
        this.player.vel.x += this.current_map.gravity.x;
        this.player.vel.y += this.current_map.gravity.y;
    }
    
    if (tile.friction) {

        this.player.vel.x *= tile.friction.x;
        this.player.vel.y *= tile.friction.y;
    }

    var t_y_up   = Math.floor(tY / this.tile_size);
    var t_y_down = Math.ceil(tY / this.tile_size);
    var y_near1  = Math.round((this.player.loc.y - offset) / this.tile_size);
    var y_near2  = Math.round((this.player.loc.y + offset) / this.tile_size);

    var t_x_left  = Math.floor(tX / this.tile_size);
    var t_x_right = Math.ceil(tX / this.tile_size);
    var x_near1   = Math.round((this.player.loc.x - offset) / this.tile_size);
    var x_near2   = Math.round((this.player.loc.x + offset) / this.tile_size);

    var top1    = this.get_tile(x_near1, t_y_up);
    var top2    = this.get_tile(x_near2, t_y_up);
    var bottom1 = this.get_tile(x_near1, t_y_down);
    var bottom2 = this.get_tile(x_near2, t_y_down);
    var left1   = this.get_tile(t_x_left, y_near1);
    var left2   = this.get_tile(t_x_left, y_near2);
    var right1  = this.get_tile(t_x_right, y_near1);
    var right2  = this.get_tile(t_x_right, y_near2);


    if (tile.jump && this.jump_switch > 15) {

        this.player.can_jump = true;
        
        this.jump_switch = 0;
        
    } else this.jump_switch++;
    
    this.player.vel.x = Math.min(Math.max(this.player.vel.x, -this.current_map.vel_limit.x), this.current_map.vel_limit.x);
    this.player.vel.y = Math.min(Math.max(this.player.vel.y, -this.current_map.vel_limit.y), this.current_map.vel_limit.y);
    
    this.player.loc.x += this.player.vel.x;
    this.player.loc.y += this.player.vel.y;
    
    this.player.vel.x *= .9;
    
    if (left1.solid || left2.solid || right1.solid || right2.solid) {

        /* fix overlap */

        while (this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1).solid
            || this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x += 0.1;

        while (this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1).solid
            || this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x -= 0.1;

        /* tile bounce */

        var bounce = 0;

        if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
        if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
        if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
        if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;

        this.player.vel.x *= -bounce || 0;
        
    }
    
    if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {

        /* fix overlap */
        
        while (this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size)).solid
            || this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y += 0.1;

        while (this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size)).solid
            || this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y -= 0.1;

        /* tile bounce */
        
        var bounce = 0;
        
        if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
        if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
        if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
        if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;
        
        this.player.vel.y *= -bounce || 0;

        if ((bottom1.solid || bottom2.solid) && !tile.jump) {
            
            this.player.on_floor = true;
            this.player.can_jump = true;
        }
        
    }
    
    // adjust camera

    var c_x = Math.round(this.player.loc.x - this.viewport.x/2);
    var c_y = Math.round(this.player.loc.y - this.viewport.y/2);
    var x_dif = Math.abs(c_x - this.camera.x);
    var y_dif = Math.abs(c_y - this.camera.y);
    
    if(x_dif > 5) {
        
        var mag = Math.round(Math.max(1, x_dif * 0.1));
    
        if(c_x != this.camera.x) {
            
            this.camera.x += c_x > this.camera.x ? mag : -mag;
            
            if(this.limit_viewport) {
                
                this.camera.x = 
                    Math.min(
                        this.current_map.width_p - this.viewport.x + this.tile_size,
                        this.camera.x
                    );
                
                this.camera.x = 
                    Math.max(
                        0,
                        this.camera.x
                    );
            }
        }
    }
    
    if(y_dif > 5) {
        
        var mag = Math.round(Math.max(1, y_dif * 0.1));
        
        if(c_y != this.camera.y) {
            
            this.camera.y += c_y > this.camera.y ? mag : -mag;
        
            if(this.limit_viewport) {
                
                this.camera.y = 
                    Math.min(
                        this.current_map.height_p - this.viewport.y + this.tile_size,
                        this.camera.y
                    );
                
                this.camera.y = 
                    Math.max(
                        0,
                        this.camera.y
                    );
            }
        }
    }
    
    if(this.last_tile != tile.id && tile.script) {
    
        eval(this.current_map.scripts[tile.script]);
    }
    
    this.last_tile = tile.id;
};

Clarity.prototype.update_player = function () {

    if (this.key.left) {

        if (this.player.vel.x > -this.current_map.vel_limit.x)
            this.player.vel.x -= this.current_map.movement_speed.left;
    }

    if (this.key.up) {

        if (this.player.can_jump && this.player.vel.y > -this.current_map.vel_limit.y) {
            
            this.player.vel.y -= this.current_map.movement_speed.jump;
            this.player.can_jump = this.current_map.fly;
        }
    }

    if (this.key.right) {

        if (this.player.vel.x < this.current_map.vel_limit.x)
            this.player.vel.x += this.current_map.movement_speed.left;
    }

    this.move_player();
};

Clarity.prototype.draw_player = function (context) {

    context.fillStyle = this.player.color;

    context.beginPath();

    context.arc(
        this.player.loc.x + this.tile_size / 2 - this.camera.x,
        this.player.loc.y + this.tile_size / 2 - this.camera.y,
        this.tile_size / 2 - 1,
        0,
        Math.PI * 2
    );

    context.fill();
};

Clarity.prototype.update = function () {

    this.update_player();
};

Clarity.prototype.draw = function (context) {

    this.draw_map(context, false);
    this.draw_player(context);
};

/* Setup of the engine */

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

var game = new Clarity();
    game.set_viewport(canvas.width, canvas.height);
    game.load_map(fly);

    /* Limit the viewport to the confines of the map */
    game.limit_viewport = true;

var Loop = function() {
  
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  game.update();
  game.draw(ctx);
  
  window.requestAnimFrame(Loop);
};

Loop(); var modal = document.getElementById("popup");
var modal2 = document.getElementById("popup2");
var modalcontent = document.getElementById("content");
var span = document.getElementsByClassName("close")[0];
var listnum = -1

popuptext('<h1 style="font-size: 48px;">Welcome to the Postwar Economics Lesson</h1><br><br><br><br><center><p style="font-size: 24px;">You can navigate through the level by completing exploration tasks and navigating through obstacles. When you are done, you will be prompted to enter a quiz where you will be tested on your knowledge.<br><br><br> Good luck on your journey!</p></center>')

var list = [
  'popuptext("<h1>Important Vocab Terms</h1><br><br><br><ul><li>Tariff: A tax on imported goods</li><br><li>Credit: An arrangement to receive cash, goods, or services now and pay for them in the future.</li><br><li>Installment Buying: Buying on credit in monthly payments</li><br><li>Monopoly: A market in which there are many buyers but only one seller.</li><br><li>Laissez-faire economics: An economic system where government should not interfere in the marketplace</li></ul>")',
  "popupiframe('https://quizlet.com/804859277/match/embed?i=4nvhy8&x=1jj1');",
  'popuptext("<h1>Please wait until you are instructed to continue</h1><br><br><p>We will present the Warren G Harring slide shortly, please wait for everyone to be done before continuing the exploration.</p>")',
  'popupiframe("https://quizlet.com/805646913/test/embed")',
  'popuptext("<h1>Please wait until you are instructed to continue</h1><br><br><p>We will present the Economic Developments slide shortly, please wait for everyone to be done before continuing the exploration.</p>")',
  'popupiframe("https://quizlet.com/805652047/spell/embed")',
   'popuptext("<h1>Please wait until you are instructed to continue</h1><br><br><p>We will present the Calvin Coolage Troubles slide shortly, please wait for everyone to be done before continuing the exploration.</p>")'
]

function popuptext(k) {
  game.current_map.movement_speed.left = 0
  game.current_map.movement_speed.right = 0
  game.current_map.movement_speed.jump = 0  
  modal.style.display = "block";
  modalcontent.innerHTML = "<p>"+k+"</p>"
}

function popupiframe(url){
  game.current_map.movement_speed.left = 0
  game.current_map.movement_speed.right = 0
  game.current_map.movement_speed.jump = 0  
  modal.style.display = "block";
  modalcontent.innerHTML = '<center><br><iframe height="450" width="900" src="'+url+'"></iframe><br><br><div style="height: 44px; width: 1032px; position: absolute; background-color: #fff; top: 480px"></div></center>'
}

function unlock(bt){
  if(bt){
    game.current_map.keys[10].solid = 0;game.current_map.keys[10].color = "#F0F"; game.current_map.data[Math.round(game.player.loc.y/game.tile_size)][Math.round((game.player.loc.x/game.tile_size))] = fly.keys[13]; game.current_map.player.x = Math.round(game.player.loc.x/game.tile_size); game.current_map.player.y = Math.round(game.player.loc.y/game.tile_size)
  }
  else{
    listnum++
    eval(list[listnum])
    game.current_map.keys[10].solid = 0;game.current_map.keys[10].color = "#F0F"; game.current_map.data[Math.round(game.player.loc.y/game.tile_size)][Math.round((game.player.loc.x/game.tile_size))] = fly.keys[13]; game.current_map.player.x = Math.round(game.player.loc.x/game.tile_size); game.current_map.player.y = Math.round(game.player.loc.y/game.tile_size)
  }
}

span.onclick = function() {
  modal.style.display = "none";
  game.current_map.movement_speed.left = 0.5
  game.current_map.movement_speed.right = 0.5
  game.current_map.movement_speed.jump = 9
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    game.current_map.movement_speed.left = 0.5
    game.current_map.movement_speed.right = 0.5
    game.current_map.movement_speed.jump = 9
  }
}
