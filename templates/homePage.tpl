<div id="pageEnter" class="pageEnter">
  <button id="pageEnter_Button" class="pageEnter_Button ui-helper-right">Entrez</button>
  <div id="pageEnter_Title" class="pageEnter_Title ui-helper-right">Bienvenue dans la SARL JPB Expertises</div>
  <div style="clear:both"></div>
</div><!-- pageEnter -->

<div>
  <div id="pageContent_Text" class="pageContent_Text ui-helper-left">
    Vous d&eacute;sirez
    d&eacute;terminer les causes d&rsquo;un sinistre, les responsabilit&eacute;s dans un d&eacute;sordre,
    solliciter l&rsquo;assistance d&rsquo;un expert pour vous conseiller dans un litige
    immobilier ou dans une r&eacute;ception de travaux?<br><br><br>
    
    <font class="companyFont">JPB Expertises</font> est un cabinet d'expertises
    qui saura r&eacute;pondre efficacement &agrave; vos demandes dans l&rsquo;expertise et le conseil
    en construction.<br><br><br>
    
    Alors n&rsquo;h&eacute;sitez plus et contactez nous.
  </div>
  
  <div id="pageContent_Infos" class="pageContent_Infos ui-helper-right">
    <div id="pageContent_Address" class="pageContent_Address">
    </div>
    <div id="pageContent_Contact" class="pageContent_Contact">
    </div>
    <div  id="pageContent_Capital" class="pageContent_Capital">
    </div>
  </div>
  <div style="clear:both"></div>
</div>

<script type="text/javascript">
  $("#pageEnter_Button").click(function(){ jpbLoadPage('pageContent',"presentation"); });

  jpbLoadPage('pageContent_Address','address');
  jpbLoadPage('pageContent_Contact','contact');
  jpbLoadPage('pageContent_Capital','capital');
</script>