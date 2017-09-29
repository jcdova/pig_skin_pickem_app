module.exports = function(sequelize, DataTypes) {
    let Picks = sequelize.define("Picks", {
        username: {type:DataTypes.STRING, unique: true},
        game_1: DataTypes.STRING,game_1: DataTypes.STRING,
        game_2: DataTypes.STRING,
        game_3: DataTypes.STRING,
        game_4: DataTypes.STRING,
        game_5: DataTypes.STRING,
        game_6: DataTypes.STRING,
        game_7: DataTypes.STRING,
        game_8: DataTypes.STRING,
        game_9: DataTypes.STRING,
        game_10: DataTypes.STRING,
        game_11: DataTypes.STRING,
        game_12: DataTypes.STRING,
        game_13: DataTypes.STRING,
        game_14: DataTypes.STRING,
        game_15: DataTypes.STRING,
        game_16: DataTypes.STRING,
        mnf: DataTypes.INTEGER,
        week: DataTypes.INTEGER
    });

    return Picks;
}




