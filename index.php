<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>JPB Expertises</title>
		
		<link rel="stylesheet" href="styles/base/jquery.ui.all.css" />
		<link rel="stylesheet" href="styles/jquery.nivo.slider.css" />
		<link rel="stylesheet" href="styles/jpbStyles.css" />
		<script type="text/javascript" src="javascript/jquery.latest.js"></script>
		<script type="text/javascript" src="javascript/ui/jquery-ui.js"></script>
		<script type="text/javascript" src="javascript/jquery.nivo.slider.js"></script>
		<script type="text/javascript" src="javascript/jpbScript.js"></script>
		
    <script type="text/javascript">
    $(document).ready(function() {
      $('#slider').nivoSlider();   
      
      jpbLoadPage('pageContent','');
    });
    </script>
    
	</head>
<body>
<div id="pageContainer" class="pageContainer ui-corner-all">
  
  <div id="pageTitle" class="pageTitle">SARL <font class="companyFont">JPB Expertises</font></div>
  
  <div id="pageMenu" class="pageMenu">
    <ul>
      <li><a href="javascript:jpbLoadPage('pageContent','homePage');">Accueil</a></li>
      <li><a href="javascript:jpbLoadPage('pageContent','presentation');">Presentation</a></li>
      <li><a href="javascript:jpbLoadPage('pageContent','competences');">Competences</a></li>
    </ul>
  </div>

  <div id="pagePictureBand" class="pagePictureBand">
    <div id="slider" class="nivoSlider">
        <img src="images/image-belledonne.jpg" alt="" title="Le massif de Belledonne" />
        <img src="images/image-chartreuse.jpg" alt="" title="Le massif de La Chartreuse" />
        <img src="images/image-vercors.jpg" alt="" title="Le massif du Vercors " />
    </div><!-- slider -->
  </div><!-- pagePictureBand -->
  
    
  <div id="pageContent" class="pageContent">
    
  </div><!-- pageContent -->
</div><!-- pageContainer -->
</body>
</html>
