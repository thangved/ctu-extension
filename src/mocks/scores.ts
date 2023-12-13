const scoreHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>       
        <title>He thong quan ly - Truong Dai hoc Can Tho</title>
	   	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
<script> var mvMaHDDT = 'CQ' ;</script><script> var mvMaSV = 'B2007210' ;</script><link rel="stylesheet" type="text/css" href="../../../templates/css/template.css"/>
        <link type="text/css" href="../../styles/ui.theme.css" rel="stylesheet" />
        <link type="text/css" href="../../styles/jquery-ui.css" rel="stylesheet" />
        <script language="javascript" src="../../includes/tdkloader.js"></script>
        <script language="javascript" src="../../includes/jquery-1.5.1.js"></script>
        <script language="javascript" src="../../includes/jquery.ui.core.js"></script>
        <script language="javascript" src="../../includes/jquery.ui.datepicker.js"></script>
        <script language="javascript" src="../../includes/jquery.ui.widget.js"></script>
        <script language="javascript" src="../../includes/jquery.ui.datepicker-vi.js"></script>
        <script language="javascript" src="../../includes/jquery.maskedinput-1.3.min.js"></script>
        <script language="javascript" src="../../includes/jquery.bgiframe.min.js"></script>
        <script language="javascript" src="../../includes/jquery-ui-1.8.11.custom.js"></Script>
		</head>
    <body>
        <!---------------------START LOADER----------------------->
        <div id="loader_container">
            <div id="loader" style="width: 350px; height: 60px; ">
		<table border="0" width="100%" id="table1" cellspacing="0" cellpadding="0" >
			<tr >
				<td align=center rowspan="2"><img src="../../images/tdkloader.gif"></td>
				<td align=left><div align="center">
					<font style="font-weight: 700; font-size: 8pt">Đang tải dữ liệu...</font></div></td>
			</tr>
			<tr>
				<td valign=top><div id="loader_bg"><div id="progress"> </div></div></td>
			</tr>
		</table>
	</div>
	</div>
	  <div id="page-container">
            <div id="page-header">
                        <div id="header">
            <div id="banner">
                <div id="div-control">
                                        
                    <a id="btn-logout" href="javascript:thoat('../../../logout.php');">Thoát</a>
                                    </div>
                    <a id="btn-homepage" href="../../hindex.php" title="Trang chủ">Trang chủ</a>
			<div id="user-login" align="left"> Kim Minh Thắng (B2007210)				</div>					
            </div>
        </div>
<script>	
    function thoat(url) {
        if (confirm('Ban co chac chan muon thoat khong ?' )) {
            document.location = url;
            return;
        }
    }
</script>            </div><!--END #page-header-->
            <div id="page-body">
            <!---------------------START PAGE BODY----------------------->
			        <div class="radius-01" style="width: 960px; margin: 0px auto; background: #fff;">
                <script language="JavaScript" src="../menu/smenu/milonic_src.js" type="text/javascript"></script>
                <script language="JavaScript" type="text/javascript">
                    if(ns4)_d.write("<scr"+"ipt language=JavaScript src=../menu/smenu/mmenuns4.js></scr"+"ipt>");		
                    else _d.write("<scr"+"ipt language=JavaScript src=../menu/smenu/mmenudom.js></scr"+"ipt>"); 
                </script>
                <script language="JavaScript" src="../menu/smenu/menu_data.js" type="text/javascript"></script>
	<h1>&nbsp;</h1>
     <script type="text/javascript">
function lietke()
{
	frmXemDiem.action="index.php?mID=201";
	frmXemDiem.submit();
}
</script>
<style type="text/css">
<!--
.style1 {color: #FF0000}
-->
</style>
<body leftmargin="0" rightmargin="0" topmargin="0" bottommargin="0">

<table width="96%" height="100%" border="0" cellpadding="0" cellspacing="0" align="center">
<tr>
    <td height="100%"  valign="top"> 
	 <form name="frmXemDiem" method="post">  
		<table width="100%" border="0" cellpadding="0" cellspacing="0"align="center">
        <tr >
          <td class="main_1_left"></td>
          <td class="main_1" align="center">Xem Điểm Học Kỳ </td>
          <td class="main_1_right">  </td>
        </tr>
        <tr > 
          <td colspan="3" >		 
		  <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0 >
				<tr  >
				  <td align="right" valign="top" class="main_3" style="border:none">&nbsp;</td>
				  <td valign="top" class="main_3" style="border:none" >&nbsp;</td>
				  <td align="right" valign="top" class="main_3" style="border:none">&nbsp;</td>
				  <td width="46%" valign="top" class="main_3" style="border:none">&nbsp;</td>
			    </tr>
				<tr>				  
                <td width="34%" align="right" valign="top" class="main_3" style="border:none">Năm học&nbsp;</td>
	  	          <td width="12%" valign="top" class="main_3" style="border:none" >
  	                <select name="cmbKhoaHoc" class="cbo" id="cmbKhoaHoc" style="width:90px">
					<option value=2023>2023 - 2024</option><option value=2022>2022 - 2023</option><option value=2021>2021 - 2022</option><option value=2020>2020 - 2021</option><option value='%' selected='selected'>Tất cả</option>                    </select>                 </td>
	  	          
                <td width="8%" align="right" valign="top" class="main_3" style="border:none">Học kỳ &nbsp;</td>
	  	          <td valign="top" class="main_3" style="border:none">
	  	            <select name="cmbHocKy"  class="cbo" id="cmbHocKy" style="width:90px">
					<option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='%' selected='selected' >Tất cả</option>	  	            
                    </select>	  	           
	  	            <input type="button" name="Button" value="Liệt kê" class="button_1" onClick="javascript:lietke()">	  	          </td>
  	            </tr>
				<tr>
				  <td align="right" valign="top" class="main_3" style="border:none">&nbsp;</td>
				  <td valign="top" class="main_3" style="border:none">&nbsp;</td>
				  <td align="right" valign="top" class="main_3" style="border:none">&nbsp;</td>
				  <td valign="top" class="main_3" style="border:none">&nbsp;</td>
			    </tr>
			</table>	
		</td>
		</tr>
		</table>
		<br>
				<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 1 Năm Học 2020 - 2021</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT100&nbsp;</td>
					<td align="left" class="level_1_1">Kỹ năng học đại học&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">D06&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.1                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">QP010&nbsp;</td>
						<td align="left" class="level_1_2">Giáo dục quốc phòng và An ninh 1 (*)&nbsp;</td>
						<td align="center" class="level_1_2">x&nbsp;</td>
						<td align="center" class="level_1_2">D01&nbsp;</td>
						<td align="center" class="level_1_2">2&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.2                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">QP011&nbsp;</td>
					<td align="left" class="level_1_1">Giáo dục quốc phòng và An ninh 2 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">D01&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">C+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             6.9                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">QP012&nbsp;</td>
						<td align="left" class="level_1_2">Giáo dục quốc phòng và An ninh 3 (*)&nbsp;</td>
						<td align="center" class="level_1_2">x&nbsp;</td>
						<td align="center" class="level_1_2">D01&nbsp;</td>
						<td align="center" class="level_1_2">2&nbsp;</td>
						<td align="center" class="level_1_2">B+&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     8.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">QP013&nbsp;</td>
					<td align="left" class="level_1_1">Giáo dục quốc phòng và An ninh 4 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">D01&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.2                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">SHCVHT&nbsp;</td>
						<td align="left" class="level_1_2">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">D21&nbsp;</td>
						<td align="center" class="level_1_2">0&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">
                                                                                                         
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">7</td>
					<td align="left" class="level_1_1">TN010&nbsp;</td>
					<td align="left" class="level_1_1">Xác suất thống kê&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">D07&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.5                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">13&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.31&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">13&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.80&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  13&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  90&nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 2 Năm Học 2020 - 2021</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT101&nbsp;</td>
					<td align="left" class="level_1_1">Lập trình căn bản A&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">12&nbsp;</td>
					<td align="center" class="level_1_1">4&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.6                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">CT172&nbsp;</td>
						<td align="left" class="level_1_2">Toán rời rạc&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">04&nbsp;</td>
						<td align="center" class="level_1_2">4&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">CT200&nbsp;</td>
					<td align="left" class="level_1_1">Nền tảng công nghệ thông tin&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">4&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">ML014&nbsp;</td>
						<td align="left" class="level_1_2">Triết học Mác - Lênin&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">05&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.6                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">SHCVHT&nbsp;</td>
					<td align="left" class="level_1_1">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">091&nbsp;</td>
					<td align="center" class="level_1_1">0&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                                                                         
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					&nbsp;					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">XH023&nbsp;</td>
						<td align="left" class="level_1_2">Anh văn căn bản 1 (*)&nbsp;</td>
						<td align="center" class="level_1_2">x&nbsp;</td>
						<td align="center" class="level_1_2">23&nbsp;</td>
						<td align="center" class="level_1_2">4&nbsp;</td>
						<td align="center" class="level_1_2">C&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     5.7                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">19&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.32&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">19&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.70&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  32&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  97&nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ Hè Năm Học 2020 - 2021</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">KN001&nbsp;</td>
					<td align="left" class="level_1_1">Kỹ năng mềm&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">18&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.4                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">ML016&nbsp;</td>
						<td align="left" class="level_1_2">Kinh tế chính trị Mác - Lênin&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">04&nbsp;</td>
						<td align="center" class="level_1_2">2&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">XH024&nbsp;</td>
					<td align="left" class="level_1_1">Anh văn căn bản 2 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">07&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">C&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             6.4                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">7&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					2.71&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">7&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.63&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  39&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  &nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 1 Năm Học 2021 - 2022</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT176&nbsp;</td>
					<td align="left" class="level_1_1">Lập trình hướng đối tượng&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">02&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.2                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">CT177&nbsp;</td>
						<td align="left" class="level_1_2">Cấu trúc dữ liệu&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">20&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.5                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">CT188&nbsp;</td>
					<td align="left" class="level_1_1">Nhập môn lập trình Web&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">11&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.6                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">CT190&nbsp;</td>
						<td align="left" class="level_1_2">Nhập môn trí tuệ nhân tạo&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">04&nbsp;</td>
						<td align="center" class="level_1_2">2&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.9                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">KL001&nbsp;</td>
					<td align="left" class="level_1_1">Pháp luật đại cương&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">03&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">ML018&nbsp;</td>
						<td align="left" class="level_1_2">Chủ nghĩa xã hội khoa học&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">08&nbsp;</td>
						<td align="center" class="level_1_2">2&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">7</td>
					<td align="left" class="level_1_1">SHCVHT&nbsp;</td>
					<td align="left" class="level_1_1">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">430&nbsp;</td>
					<td align="center" class="level_1_1">0&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                                                                         
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					&nbsp;					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">8</td>
						<td align="left" class="level_1_2">TN001&nbsp;</td>
						<td align="left" class="level_1_2">Vi - Tích phân A1&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">07&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.3                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">9</td>
					<td align="left" class="level_1_1">TN012&nbsp;</td>
					<td align="left" class="level_1_1">Đại số tuyến tính và hình học&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">4&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.5                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">22&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.66&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">22&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.64&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  61&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  98&nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 2 Năm Học 2021 - 2022</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT173&nbsp;</td>
					<td align="left" class="level_1_1">Kiến trúc máy tính&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">04&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">CT174&nbsp;</td>
						<td align="left" class="level_1_2">Phân tích và thiết kế thuật toán&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">06&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.3                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">CT175&nbsp;</td>
					<td align="left" class="level_1_1">Lý thuyết đồ thị&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">02&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             10.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">CT207&nbsp;</td>
						<td align="left" class="level_1_2">Phát triển phần mềm mã nguồn mở&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">01&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">B+&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     8.2                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">ML019&nbsp;</td>
					<td align="left" class="level_1_1">Lịch sử Đảng Cộng sản Việt Nam&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">06&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">SHCVHT&nbsp;</td>
						<td align="left" class="level_1_2">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">065&nbsp;</td>
						<td align="center" class="level_1_2">0&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">
                                                                                                         
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">7</td>
					<td align="left" class="level_1_1">TC005&nbsp;</td>
					<td align="left" class="level_1_1">Bóng chuyền 1 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">10&nbsp;</td>
					<td align="center" class="level_1_1">1&nbsp;</td>
					<td align="center" class="level_1_1">D&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             4.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">8</td>
						<td align="left" class="level_1_2">TN002&nbsp;</td>
						<td align="left" class="level_1_2">Vi - Tích phân A2&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">03&nbsp;</td>
						<td align="center" class="level_1_2">4&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.3                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">19&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.42&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">19&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.58&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  80&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  90&nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ Hè Năm Học 2021 - 2022</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">XH025&nbsp;</td>
					<td align="left" class="level_1_1">Anh văn căn bản 3 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">07&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">3&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.00&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">3&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.58&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  83&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  &nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 1 Năm Học 2022 - 2023</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT121&nbsp;</td>
					<td align="left" class="level_1_1">Tin học lý thuyết&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.1                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">CT178&nbsp;</td>
						<td align="left" class="level_1_2">Nguyên lý hệ điều hành&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">10&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.3                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">CT180&nbsp;</td>
					<td align="left" class="level_1_1">Cơ sở dữ liệu&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">10&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.4                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">CT182&nbsp;</td>
						<td align="left" class="level_1_2">Ngôn ngữ mô hình hóa&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">06&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.3                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">CT199&nbsp;</td>
					<td align="left" class="level_1_1">Quy hoạch tuyến tính&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">02&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">CT204&nbsp;</td>
						<td align="left" class="level_1_2">An toàn và bảo mật thông tin&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">01&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     10.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">7</td>
					<td align="left" class="level_1_1">CT332&nbsp;</td>
					<td align="left" class="level_1_1">Trí tuệ nhân tạo&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.2                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">8</td>
						<td align="left" class="level_1_2">SHCVHT&nbsp;</td>
						<td align="left" class="level_1_2">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">281&nbsp;</td>
						<td align="center" class="level_1_2">0&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">
                                                                                                         
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">9</td>
					<td align="left" class="level_1_1">TC006&nbsp;</td>
					<td align="left" class="level_1_1">Bóng chuyền 2 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">11&nbsp;</td>
					<td align="center" class="level_1_1">1&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.5                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">22&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.93&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">22&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.66&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  105&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  95&nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 2 Năm Học 2022 - 2023</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT112&nbsp;</td>
					<td align="left" class="level_1_1">Mạng máy tính&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">07&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.5                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">CT201&nbsp;</td>
						<td align="left" class="level_1_2">Niên luận cơ sở ngành Khoa học máy tính&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">04&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     9.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">CT203&nbsp;</td>
					<td align="left" class="level_1_1">Đồ họa máy tính&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.8                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">CT296&nbsp;</td>
						<td align="left" class="level_1_2">Phân tích và thiết kế hệ thống thông tin&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">06&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.1                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">CT449&nbsp;</td>
					<td align="left" class="level_1_1">Phát triển ứng dụng Web&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">08&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.1                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">CT467&nbsp;</td>
						<td align="left" class="level_1_2">Quản trị dữ liệu&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">03&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">B&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     7.2                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						*						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">7</td>
					<td align="left" class="level_1_1">ML021&nbsp;</td>
					<td align="left" class="level_1_1">Tư tưởng Hồ Chí Minh&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">2&nbsp;</td>
					<td align="center" class="level_1_1">B&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             7.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">8</td>
						<td align="left" class="level_1_2">SHCVHT&nbsp;</td>
						<td align="left" class="level_1_2">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">065&nbsp;</td>
						<td align="center" class="level_1_2">0&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">
                                                                                                         
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">9</td>
					<td align="left" class="level_1_1">TC020&nbsp;</td>
					<td align="left" class="level_1_1">Bóng chuyền 3 (*)&nbsp;</td>
					<td align="center" class="level_1_1">x&nbsp;</td>
					<td align="center" class="level_1_1">04&nbsp;</td>
					<td align="center" class="level_1_1">1&nbsp;</td>
					<td align="center" class="level_1_1">B+&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             8.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">21&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					3.38&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">21&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.61&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  126&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  83&nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ Hè Năm Học 2022 - 2023</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT473&nbsp;</td>
					<td align="left" class="level_1_1">Thực tập thực tế - KHMT&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.8                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					*					&nbsp;</td>
				  </tr>
				  						  
            </table>
						<table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td width="27%" class="level_1_1" style="border:none">Tổng số tín chỉ đăng ký </td>
				    <td width="27%" class="level_1_1" style="border:none">3&nbsp;</td>
				    <td width="23%" class="level_1_1" style="border:none">Ðiểm trung bình học kỳ</td>
				    <td width="23%" class="level_1_1" style="border:none">
					4.00&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy học kỳ </td>
				  <td class="level_1_1" style="border:none">3&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm trung bình tích lũy </td>
			      <td class="level_1_1" style="border:none">3.62&nbsp;</td>
				</tr>
				<tr>
				  <td class="level_1_1" style="border:none">Tổng số tín chỉ tích lũy </td>
				  <td class="level_1_1" style="border:none">
				  129&nbsp;</td>
			      <td class="level_1_1" style="border:none">Ðiểm rèn luyện </td>
			      <td class="level_1_1" style="border:none">
				  &nbsp;
				  </td>
				</tr>
                                
			</table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0">
        <tr >
          <td class="main_1_left"> </td>
          <td class="main_1" align="center">Xem Ðiểm Học Kỳ 1 Năm Học 2023 - 2024</td>
          <td class="main_1_right"> </td>
        </tr>
        <tr >
          <td colspan="3" align="left">
            <table width="100%" class="border_1" borderColor="#111111" cellSpacing=0 cellPadding=0 align="center" border=0>             		
              <tr> 
                <td width="5%" height="22" align="center" class="main_3">Stt</td>
                <td width="10%" align="center" class="main_3">Mã HP </td>
                <td width="35%" align="center" class="main_3">Tên học phần</td>
				<td width="10%" align="center" class="main_3">Điều kiện</td>
                <td width="8%" align="center" class="main_3">Nhóm</td>
                <td width="9%" align="center" class="main_3">Tín chỉ</td>
                <td width="11%" align="center" class="main_3">Điểm chữ </td>
				<td width="11%" align="center" class="main_3">Điểm số </td>
                <td width="15%" align="center" class="main_3">Tích lũy &nbsp;</td>
              </tr>			
							  <tr>
					<td height="22" align="center" class="main_3">1</td>
					<td align="left" class="level_1_1">CT179&nbsp;</td>
					<td align="left" class="level_1_1">Quản trị hệ thống&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">05&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.0                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					&nbsp;					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">2</td>
						<td align="left" class="level_1_2">CT202&nbsp;</td>
						<td align="left" class="level_1_2">Nguyên lý máy học&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">01&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">A&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     10.0                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">3</td>
					<td align="left" class="level_1_1">CT208&nbsp;</td>
					<td align="left" class="level_1_1">Niên luận ngành Khoa học máy tính&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">01&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.8                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					&nbsp;					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">4</td>
						<td align="left" class="level_1_2">CT282&nbsp;</td>
						<td align="left" class="level_1_2">Học sâu (Deep Learning)&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">01&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">B+&nbsp;</td>
						<td align="center" class="level_1_2">
                                                     8.8                                                    
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">5</td>
					<td align="left" class="level_1_1">CT294&nbsp;</td>
					<td align="left" class="level_1_1">Máy học ứng dụng&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">02&nbsp;</td>
					<td align="center" class="level_1_1">3&nbsp;</td>
					<td align="center" class="level_1_1">A&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                             9.3                                            
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					&nbsp;					&nbsp;</td>
				  </tr>
				 					 <tr>
						<td height="22" align="center" class="main_3">6</td>
						<td align="left" class="level_1_2">CT312&nbsp;</td>
						<td align="left" class="level_1_2">Khai khoáng dữ liệu&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">02&nbsp;</td>
						<td align="center" class="level_1_2">3&nbsp;</td>
						<td align="center" class="level_1_2">&nbsp;</td>
						<td align="center" class="level_1_2">
                                                                                                         
                                                    
                                                    &nbsp;</td>
					    <td align="center" class="level_1_2">
						&nbsp;						&nbsp;</td>
					 </tr>			 
					 				  <tr>
					<td height="22" align="center" class="main_3">7</td>
					<td align="left" class="level_1_1">SHCVHT&nbsp;</td>
					<td align="left" class="level_1_1">Cố vấn học tập sinh hoạt lớp&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">068&nbsp;</td>
					<td align="center" class="level_1_1">0&nbsp;</td>
					<td align="center" class="level_1_1">&nbsp;</td>
					<td align="center" class="level_1_1">
                                            
                                                                                         
                                            
                                            &nbsp;</td>
				    <td align="center" class="level_1_1">
					&nbsp;					&nbsp;</td>
				  </tr>
				  						  
            </table>
					  </td>
        </tr>	
        </table>		
		
<br>
	
			<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
			<td class="level_1_1" style="border:none">
			
			Nếu có sai sót các bạn vui lòng phản ánh về địa chỉ sau: <span class="style1">
			vantu@ctu.edu.vn</span> để kiểm tra.<br>
			Hệ thống sẽ xử lý điểm trung bình học kỳ 1, 2023-2024 (thời gian dự kiến hoàn thành ngày 18-19/12/2023). SV có thắc mắc về điểm trung bình học kỳ vui lòng liên hệ sau ngày 20/12/2023. SV có thắc mắc về điểm học phần thì liên hệ GV dạy học phần để được giải đáp.<br>Cách tính điểm trung bình xem tại đây <a href='http://bit.ly/31raQo5' target='_blank'> [http://bit.ly/31raQo5] </a> .<br> <span class='style1'> Theo quy chế học vụ <a href='https://daa.ctu.edu.vn/images/upload/VanBan/QCHV_2021_QD1813.pdf' target='_blank'>(xem tại đây) </a>từ học kỳ 1 năm học 2016-2017 các học phần Giáo dục thể chất
không tính vào điểm bình chung học kỳ.	
			
				 </strong> </td>
		</tr>
		</table>				
</form>	
</td>
</tr>
</table>
</body>
		
		</div>
			<div class="box-shadow"></div>
            <div><!--END #page-body-->
						
            <div id="page-footer">
                        <div id="footer">
                <p class="top">Trường Đại học Cần Thơ (Can Tho University)</p>
                <p>Khu II, đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ.</p>
                <p class="bottom">Điện thoại: (84-292) 3832663 - (84-292) 3838474; Fax: (84-292) 3838474; Email: dhct@ctu.edu.vn.</p>
            </td>
        </div>            </div><!--END #page-footer-->
        </div><!--END #page-container-->
    

    <script language="javascript">remove_loading();</script>
	</html>
`;

export default scoreHtml;
