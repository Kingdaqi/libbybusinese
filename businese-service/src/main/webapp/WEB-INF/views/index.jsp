<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="../js/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="../js/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="../js/demo/demo.css">
    <script  src="../js/jquery.min.js"></script>
    <script src="../js/jquery.easyui.min.js"></script>
</head>


<body class="easyui-layout">
    <div data-options="region:'north',title:'North Title',split:true" style="height:100px;">

    </div>


    <div data-options="region:'west',title:'West',split:true" style="width:200px;">
        <div id="aa" class="easyui-accordion" style="width:300px;height:200px;">
            <div title="Title1" data-options="iconCls:'icon-save'" style="overflow:auto;padding:10px;">
                <h3 style="color:#0099FF;">Accordion for jQuery</h3>
                <p>Accordion is a part of easyui framework for jQuery.
                    It lets you define your accordion component on web page more easily.</p>
            </div>
            <div title="Title2" data-options="iconCls:'icon-reload',selected:true" style="padding:10px;">
                content2
            </div>
            <div title="Title3">
                content3
            </div>
        </div>
    </div>


    <div data-options="region:'center',title:'center title'" style="padding:5px;background:#eee;">
        <div id="tt" class="easyui-tabs" style="width:500px;height:250px;">
            <div title="Tab1" style="padding:20px;display:none;">
                tab1
            </div>
            <div title="Tab2" data-options="closable:true" style="overflow:auto;padding:20px;display:none;">
                tab2
            </div>
            <div title="Tab3" data-options="iconCls:'icon-reload',closable:true" style="padding:20px;display:none;">
                tab3
            </div>
        </div>
    </div>


</body>


</html>