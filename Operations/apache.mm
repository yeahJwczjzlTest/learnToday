<map version="1.0.0"><node ID="64598708-2C39-4510-98BB-12786708EC75" BACKGROUND_COLOR="#FFFFFF" TEXT="apache" COLOR="#1A5469" POSITION="right" STYLE="bubble"><edge COLOR="#1A5469" WIDTH="4" /><font NAME="PingFangSC-Light" SIZE="24" /><node ID="4B6C6C02-E64A-451D-8C7C-90ECC48D91CF" TEXT="&#26085;&#24535;" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#1286DE" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /><node ID="1CE3DFE1-E659-43F2-94C3-F704476F354F" TEXT="&#36890;&#29992;&#26085;&#24535;&#26684;&#24335;(common log)" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#1286DE" WIDTH="4" /><font NAME="PingFangSC-Regular" SIZE="18" /><node ID="10EEAFDA-E0E3-4138-8447-7CDB5E42957D" TEXT="vim httpd-vhost.conf &#25628;&#32034; common" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#1286DE" WIDTH="4" /><font NAME="PingFangSC-Regular" SIZE="18" /></node>
</node>
<node ID="4AC5A137-942C-4DC5-BFE8-62AA66915643" TEXT="&#32452;&#21512;&#26085;&#24535;&#26684;&#24335;(combined log)" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#1286DE" WIDTH="4" /><font NAME="PingFangSC-Regular" SIZE="18" /><node ID="9C7891FC-753E-4105-9FE3-D59F9F92C313" TEXT="vim httpd-vhost.conf &#25628;&#32034; combined" COLOR="#425A65" POSITION="right" STYLE="fork"><edge COLOR="#1286DE" WIDTH="4" /><font NAME="PingFangSC-Regular" SIZE="18" /></node>
</node>
</node>
<node ID="86D08EFB-1152-40B6-9058-BD0276CBD208" TEXT="&#26085;&#24535;&#36718;&#35810;" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#25BAD1" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /><node ID="932FEC45-9530-4F75-939D-27F8E9BBF32B" TEXT="rotatelogs &#33258;&#24102;" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#25BAD1" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /></node>
<node ID="95DA345A-1086-4C6A-97C2-6E8384F4E0CF" TEXT="cronolog" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#25BAD1" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /><node ID="62DCC417-C983-42FE-B069-AC083CB60004" TEXT="&#20351;&#29992; epel &#28304;&#23433;&#35013;" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#25BAD1" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /></node>
<node ID="70E630EB-5F68-4ABB-B4FB-F59846DEFEE0" TEXT="&#23433;&#35013;&#21518;&#37197;&#32622;&#21040; extra/httpd-vhost.conf &#34394;&#25311;&#20027;&#26426;&#37324;&#38754;" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#25BAD1" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /></node>
<node ID="CE94BE78-801E-47FE-911E-5B000BB49112" TEXT="&#20070;&#20889;:CustomLog &#8221;|/usr/sbin/cronolog /app/logs/access_bbs_%Y%m%d.log&#8221; combined" COLOR="#435B66" POSITION="right" STYLE="fork"><edge COLOR="#25BAD1" WIDTH="5" /><font NAME="PingFangSC-Regular" SIZE="18" /></node>
</node>
</node>
</node>
</map>