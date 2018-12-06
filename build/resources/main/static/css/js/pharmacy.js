$(function () {

    $("#tabs").tabs();

    $("#dateOfBirth").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#dateCreated").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#expiryDate").datepicker({
        dateFormat: "dd/mm/yy"
    });

    $("#accordionMenu").accordion();

    /**********Start load  count prescriptions ********/
    $.get(
        requestContextPath + "/prescription/countPrescriptions",
        function (data) {
            $("#count_prescriptions").html('<li><a class="btn btn-default" href="' + requestContextPath + '/prescription/list">Prescriptions <span class="badge">' + data + '</span></a></li>');
        }
    );
    /********** End load  count prescriptions ********/


});

function add_product_property(id) {
    $.getJSON(requestContextPath + "/admin/product/get/" + id, function (data, status) {
            var obj = data;
        add_product(obj);
        });
}


function add_product(obj) {
    $("#product_property_list").html('<tr><td>' + obj.name + '</td><td>' + obj.drugRoute.name + '</td><td>' + obj.drugFormulation.name + '</td><td><a href="#" onclick="select_drug_property(' + obj.id + ')">Add Drug</a></td></tr>');
}

function add_drug_stock_properties(id, prescriptionItemId) {
    $.getJSON(requestContextPath + "/drugStock/property_search_list/" + id, function (data, status) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            $("#drug_property_list").html('<tr><td>' + obj.product.name + '</td><td>' + obj.product.drugRoute.name + '</td><td>' + obj.product.drugFormulation.name + '</td><td><a href="' + requestContextPath + '/prescription/' + prescriptionItemId + '/dispensePrescriptionItem/' + obj.product.id + '">Dispense </a></td></tr>');
        }
    });
}

function select_drug_property(id) {

    $("#drugItemModal").modal('show');
    $("#prescriptionItem #product").remove();
    $("#drugStock #product").remove();
    $('#prescriptionItem').append('<input type="hidden" name="product" id="product" value="' + id + '" />');
    $('#drugStock').append('<input type="hidden" name="product" id="product" value="' + id + '" />');


}

function addPrescriptionDispenseItemModal(id) {

    $("#prescriptionDispense #prescriptionItem").remove();
    $("#prescriptionDispense #requiredCount").remove();
    $("#prescriptionDispenseItemModal").modal('show');
    $('#prescriptionDispense').append('<input type="hidden" name="prescriptionItem" id="prescriptionItem" value="' + id + '" />');
    $.ajax({
        url: requestContextPath + "/prescription/searchProperty",
        data: {'id': id},
        success: function (data) {
            obj = data;
            $('#prescriptionDispense #totalCount').html(obj.requiredCount);
        }
    });

}

function showItemModal() {

    $("#drugItemModal").modal('show');

}

function showproductStockModal(id) {

    $.ajax({
        url: requestContextPath + "/productStock/getBatch",
        data: {'id': id},
        success: function (data) {
            obj = data;
            $('#productBatch').html('<label id="productBatch">'+ obj.batchNumber +'</label>');
            $('#productName').html('<label id="productName">'+ obj.product.name +'</label>');
            $('#totalBatchProducts').html('<label id="totalBatchProducts">'+ obj.totalBatchProducts +'</label>');
            $('#dateReceived').html('<label id="dateReceived">'+ obj.dateReceivedAsString +'</label>');
            $('#expiryDate').html('<label id="expiryDate">'+ obj.expiryDateAsString +'</label>');
            $("#productStockModal").modal('show');
        }
    });


}

function showproductStockHistoryModal() {

    $("#productStockItemModal").modal('show');
}


function showPurchaseOrderModal() {

    $("#purchaseOrderModal").modal('show');

}




/**********Product Batch Search********/
var productBatchSearchTerm = null;
function search_productBatch(value) {
    if (productBatchSearchTerm != null) productBatchSearchTerm.abort();
    if (value.length >= 3) {
        productBatchSearchTerm = $.ajax({
            url: requestContextPath + "/productBatch/search_list",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                console.log('Mapping data', data);
                $.each(data, function (i, obj) {
                    console.log('Received object', obj);
                    resultTable += ('<tr><td>' + obj.product.name + '</td><td>' + obj.totalBatchProducts + '</td><td>' + obj.id +
                    '</td><td>'+ obj.expiryDateAsString +'</td><td>' + obj.dateReceivedAsString +'</td><td>' +
                    '<a id="' + obj.id + '" href="#" onclick="showproductStockModal('+obj.id+')" >Add Product to Stock</a></td></tr>');
                });
                $("#productBatch_search_result_div").show();
                $("#productBatch_search_result_list").html(resultTable);
            }
        });
    } else {
        $("#productBatch_search_result_div").hide();
    }
}



function getFormattedDate(dateTimeStamp){
    return moment.unix(dateTimeStamp).format('DD/MM/YYYY');
}
/**********End Product Batch Search********/

/**********Product Batch Search********/
$('#productTable tr').click(function () {
    var href = $(this).find("a").attr("href");
    if (href) {
        window.location = href;
    }
});

/**********Product Batch Search********/

/**********Drug Search Search********/
var drugSearchTerm = null;
function search_drug(value) {
    if (drugSearchTerm != null) drugSearchTerm.abort();
    if (value.length >= 3) {
        drugSearchTerm = $.ajax({
            url: requestContextPath + "/admin/product/drug_search_list",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                $.map(data, function (obj, i) {
                    resultTable += ('<a id="' + obj.id + '" href="#" class="list-group-item" onclick="add_product_property(' +obj.id+ ')">' + obj.name + '</a>');
                });
                $("#selected_drugs").html(resultTable);
            }
        });
    } else {

    }
}
/**********End Drug Search********/


/**********Drug Stock Search Search********/
var drugStockSearchTerm = null;
function search_drug_stock(value) {
    if (drugStockSearchTerm != null) drugStockSearchTerm.abort();
    if (value.length >= 3) {
        drugStockSearchTerm = $.ajax({
            url: requestContextPath + "/drugStock/property_search_list/",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                $.map(data, function (obj, i) {
                    resultTable += ('<a id="' + obj.id + '" href="#" class="list-group-item" onclick="add_drug_properties(' + obj.id + ')">' + obj.name + '</a>');
                });
                $("#selected_drugs").html(resultTable);
            }
        });
    } else {

    }
}
/**********End Drug Stock Search********/

/**********Calculate Drugs Required********/
var requiredCount = 1;
function search_calculate(value) {
    totalCount = requiredCount * value;
    $('#prescriptionDispense #totalCount').html(totalCount);

}

function validate_medicalAid() {

    alert("Medical Aid - Verification ");
}

if (patientSummaryId != null && patientSummaryId.length > 0) {
    $.ajax({
        url: requestContextPath + "/prescription/openPatientPrescriptions",
        data: {'id': patientSummaryId},
        success: function (data) {
            obj = data;
            $("#openPatientPrescriptions").html('<a href="' + requestContextPath + '/prescription/list/' + patientSummaryId + '">Prescriptions<span class="badge">' + obj + '</span></a>');

        }
    });
}

/**********End Drug Stock Search********/

/**********Patient Search********/
var patientSearchTerm = null;
function search_patient(value) {
    if (patientSearchTerm != null) patientSearchTerm.abort();
    if (value.length >= 3) {
        patientSearchTerm = $.ajax({
            url: requestContextPath + "/patient/search_list",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                $.map(data, function (obj, i) {
                    resultTable += ('<tr><td><a id="' + obj.id + '" href="' + requestContextPath + "/patient/" + obj.id + '">' + obj.patientNumber + '</a></td><td>' + obj.firstName + '</td><td>' + obj.middleName + '</td><td>' + obj.lastName + '</td><td>' + obj.age + '</td><td>' + obj.gender + '</td><td><a id="' + obj.id + '" href="' + requestContextPath + "/patient/" + obj.id + '">Manage Patient</a></td></tr>');
                });
                $("#patient_search_result_div").show();
                $("#patient_search_result_list").html(resultTable);
            }
        });
    } else {
        $("#patient_search_result_div").hide();
    }
}
/**********End Patient Search********/

/**********Patient Search********/
$('#patientTable tr').click(function () {
    var href = $(this).find("a").attr("href");
    if (href) {
        window.location = href;
    }
});

/**********Patient Search********/

/**********Product Search********/
var productSearchTerm = null;
function search_product(value) {
    if (productSearchTerm != null) productSearchTerm.abort();
    if (value.length >= 3) {
        productSearchTerm = $.ajax({
            url: requestContextPath + "/admin/product/search_list",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                $.map(data, function (obj, i) {
                    resultTable += ('<tr><td><a id="' + obj.id + '" href="' + requestContextPath + "/admin/product/" + obj.id + '">' + obj.name + '</a></td><td>' + obj.drug + '</td><td>' + obj.productCategoryType + '</td><td>' + obj.drugLevel + '</td></tr>');
                });
                $("#product_search_result_div").show();
                $("#product_search_result_list").html(resultTable);
            }
        });
    } else {
        $("#product_search_result_div").hide();
    }
}
/**********End Product Search********/

/**********Product Search********/
$('#productTable tr').click(function () {
    var href = $(this).find("a").attr("href");
    if (href) {
        window.location = href;
    }
});

/**********Product Search********/

/**********Drug Product Search********/
var productSearchTerm = null;
function search_drug_product(value) {
    if (productSearchTerm != null) productSearchTerm.abort();
    if (value.length >= 3) {
        productSearchTerm = $.ajax({
            url: requestContextPath + "/admin/product/drug_search_list",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                $.map(data, function (obj, i) {
                    resultTable += ('<tr><td><a id="' + obj.id + '" href="' + requestContextPath + "/admin/product/" + obj.id + '">' + obj.name + '</a></td><td>' + obj.productCategoryType + '</td><td>' + obj.drugLevel + '</td></tr>');
                });
                $("#product_search_result_div").show();
                $("#product_search_result_list").html(resultTable);
            }
        });
    } else {
        $("#product_search_result_div").hide();
    }
}
/**********End Drug Product Search********/

/**********Drug Product Search********/
$('#productTable tr').click(function () {
    var href = $(this).find("a").attr("href");
    if (href) {
        window.location = href;
    }
});

/**********Drug Product Search********/

/**********Requisition Search********/
var requisitionSearchTerm = null;
function search_requisition(value) {
    if (requisitionSearchTerm != null) requisitionSearchTerm.abort();
    if (value.length >= 3) {
        requisitionSearchTerm = $.ajax({
            url: requestContextPath + "/admin/requisitionForm/search_list",
            data: {'searchTerm': value},
            success: function (data) {
                resultTable = "";
                console.log('Mapping data', data);
                $.each(data, function (i, obj) {
                    console.log('Received object', obj);
                    resultTable += ('<tr><td>' + obj.requisitionNumber + '</td><td>' + obj.productCode + '</td><td>' + obj.unitPrice + '</td><td>' + obj.quantity + '</td><td>' + obj.totalAmount + '</td><td>' + obj.supplier + '</td><td>' +
                    '<a id="' + obj.id + '" href="#" onclick="showPurchaseOrderModal()" >Create Purchase Order</a></td></tr>');
                });
                $("#requisition_search_result_div").show();
                $("#requisition_search_result_list").html(resultTable);
            }
        });
    } else {
        $("#requisition_search_result_div").hide();
    }
}

$('#requisitionTable tr').click(function () {
    var href = $(this).find("a").attr("href");
    if (href) {
        window.location = href;
    }
});

