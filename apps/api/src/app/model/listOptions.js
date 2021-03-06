var sql = require('../database/connect.js');

exports.listAllOptions = function listOptions(dummy, result) {
    var query = "select  id, parentId, categoryId, description from `list_options`  where parentId is not null " ;
    sql.executeQuery(query, dummy, result);
};

exports.listOptionByParent = function listOptionByParent(parentId, result) {
    var query = "select id, parentId, description from `list_options`  where parentId = ? ";   
    sql.executeQuery(query, parentId, result);
};

exports.listOptionByCategory = function listOptionById(categoryId, result) {
    var query = "select id, parentId, description from `list_options` where categoryId = ?  ";
    sql.executeQuery(query, categoryId, result);
};

exports.listOptionById = function listOptionById(Id, result) {
    var query = "select id, parentId, description from `list_options` where id = ?  ";
    sql.executeQuery(query, Id, result);
};

