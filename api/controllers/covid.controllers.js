// const apiCallFromRequest = require('../apicalls/Request')
const apiCallFromNode = require('../apicalls/NodeJsCall')

module.exports.covid=function (req, res) {
  apiCallFromNode.callApi(function(response){
    data=JSON.parse(response)['states_daily'];
    // console.log(data['states_daily'])
    var total=0
    var telangana=0
    var maharashtra=0
    var tamilnadu=0
    var delhi=0
    var kerala=0
    var uttarpradesh=0
    var andhrapradesh=0
    var rajasthan=0
    var madhyapradesh=0
    var karnataka=0
    var gujarat=0
    var haryana=0
    var jammukashmir=0
    var westbengal=0
    var punjab=0
    var odisha=0
    var bihar=0
    var uttarakhand=0
    var assam=0
    var chandigarh=0
    var himachalpradesh=0
    var ladakh=0
    var andamannicobar=0
    var chattisgarh=0
    var goa=0
    var puducherry=0
    var jharkhand=0
    var manipur=0
    var arunachalpradesh=0
    var darahaveli=0
    var mizoram=0
    var tripura=0

    var tt=[]
    var tg=[]
    var mh=[]
    var tn=[]
    var dl=[]
    var kl=[]
    var up=[]
    var ap=[]
    var rj=[]
    var mp=[]
    var ka=[]
    var gj=[]
    var hr=[]
    var jk=[]
    var wb=[]
    var pb=[]
    var or=[]
    var br=[]
    var ut=[]
    var as=[]
    var ch=[]
    var hp=[]
    var la=[]
    var an=[]
    var ct=[]
    var ga=[]
    var py=[]
    var jh=[]
    var mn=[]
    var ar=[]
    var dn=[]
    var mz=[]
    var tr=[]

    var covid=[]
    var covidtg=[]
    var covidmh=[]
    var covidtn=[]
    var coviddl=[]
    var covidkl=[]
    var covidup=[]
    var covidap=[]
    var covidrj=[]
    var covidmp=[]
    var covidka=[]
    var covidgj=[]
    var covidhr=[]
    var covidjk=[]
    var covidwb=[]
    var covidpb=[]
    var covidor=[]
    var covidbr=[]
    var covidut=[]
    var covidas=[]
    var covidch=[]
    var covidhp=[]
    var covidla=[]
    var covidan=[]
    var covidct=[]
    var covidga=[]
    var covidpy=[]
    var covidjh=[]
    var covidmn=[]
    var covidar=[]
    var coviddn=[]
    var covidmz=[]
    var covidtr=[]

    for(i=0;i<data.length; i++){
      if (data[i]['status']=='Confirmed') {
        total=total+parseInt(data[i]['tt'])
        telangana=telangana+parseInt(data[i]['tg'])
        maharashtra=maharashtra+parseInt(data[i]['mh'])
        tamilnadu=tamilnadu+parseInt(data[i]['tn'])
        delhi=delhi+parseInt(data[i]['dl'])
        kerala=kerala+parseInt(data[i]['kl'])
        uttarpradesh=uttarpradesh+parseInt(data[i]['up'])
        andhrapradesh=andhrapradesh+parseInt(data[i]['ap'])
        rajasthan=rajasthan+parseInt(data[i]['rj'])
        madhyapradesh=madhyapradesh+parseInt(data[i]['mp'])
        karnataka=karnataka+parseInt(data[i]['ka'])
        gujarat=gujarat+parseInt(data[i]['gj'])
        haryana=haryana+parseInt(data[i]['hr'])
        jammukashmir=jammukashmir+parseInt(data[i]['jk'])
        westbengal=westbengal+parseInt(data[i]['wb'])
        punjab=punjab+parseInt(data[i]['pb'])
        odisha=odisha+parseInt(data[i]['or'])
        bihar=bihar+parseInt(data[i]['br'])
        uttarakhand=uttarakhand+parseInt(data[i]['ut'])
        assam=assam+parseInt(data[i]['as'])
        chandigarh=chandigarh+parseInt(data[i]['ch'])
        himachalpradesh=himachalpradesh+parseInt(data[i]['hp'])
        ladakh=ladakh+parseInt(data[i]['la'])
        andamannicobar=andamannicobar+parseInt(data[i]['an'])
        chattisgarh=chattisgarh+parseInt(data[i]['ct'])
        goa=goa+parseInt(data[i]['ga'])
        puducherry=puducherry+parseInt(data[i]['py'])
        jharkhand=jharkhand+parseInt(data[i]['jh'])
        manipur=manipur+parseInt(data[i]['mn'])
        arunachalpradesh=arunachalpradesh+parseInt(data[i]['ar'])
        darahaveli=darahaveli+parseInt(data[i]['dn'])
        mizoram=mizoram+parseInt(data[i]['mz'])
        tripura=tripura+parseInt(data[i]['tr'])

        tt.push(total)
        tg.push(telangana)
        mh.push(maharashtra)
        tn.push(tamilnadu)
        dl.push(delhi)
        kl.push(kerala)
        up.push(uttarpradesh)
        ap.push(andhrapradesh)
        rj.push(rajasthan)
        mp.push(madhyapradesh)
        ka.push(karnataka)
        gj.push(gujarat)
        hr.push(haryana)
        jk.push(jammukashmir)
        wb.push(westbengal)
        pb.push(punjab)
        or.push(odisha)
        br.push(bihar)
        ut.push(uttarakhand)
        as.push(assam)
        ch.push(chandigarh)
        hp.push(himachalpradesh)
        la.push(ladakh)
        an.push(andamannicobar)
        ct.push(chattisgarh)
        ga.push(goa)
        py.push(puducherry)
        jh.push(jharkhand)
        mn.push(manipur)
        ar.push(arunachalpradesh)
        dn.push(darahaveli)
        mz.push(mizoram)
        tr.push(tripura)

        week=0
        weektg=0
        weekmh=0
        weektn=0
        weekdl=0
        weekkl=0
        weekup=0
        weekap=0
        weekrj=0
        weekmp=0
        weekka=0
        weekgj=0
        weekhr=0
        weekjk=0
        weekwb=0
        weekpb=0
        weekor=0
        weekbr=0
        weekut=0
        weekas=0
        weekch=0
        weekhp=0
        weekla=0
        weekan=0
        weekct=0
        weekga=0
        weekpy=0
        weekjh=0
        weekmn=0
        weekar=0
        weekdn=0
        weekmz=0
        weektr=0

        datei=new Date(data[i]['date'])
        date7=new Date(data[i]['date'])
        date7.setDate(date7.getDate() -7);
        for(j=0;j<data.length; j++){
          if (data[j]['status']=='Confirmed') {
            datej=new Date(data[j]['date'])
            // console.log(date7.getTime());
            // console.log(datej.getTime());
            // console.log(datei.getTime());
            // console.log(datej.getTime()<=datei.getTime());
            if (date7.getTime()<datej.getTime() && datej.getTime()<=datei.getTime()) {

              week=week+parseInt(data[j]['tt'])
              weektg=weektg+parseInt(data[j]['tg'])
              weekmh=weekmh+parseInt(data[j]['mh'])
              weektn=weektn+parseInt(data[j]['tn'])
              weekdl=weekdl+parseInt(data[j]['dl'])
              weekkl=weekkl+parseInt(data[j]['kl'])
              weekup=weekup+parseInt(data[j]['up'])
              weekap=weekap+parseInt(data[j]['ap'])
              weekrj=weekrj+parseInt(data[j]['rj'])
              weekmp=weekmp+parseInt(data[j]['mp'])
              weekka=weekka+parseInt(data[j]['ka'])
              weekgj=weekgj+parseInt(data[j]['gj'])
              weekhr=weekhr+parseInt(data[j]['hr'])
              weekjk=weekjk+parseInt(data[j]['jk'])
              weekwb=weekwb+parseInt(data[j]['wb'])
              weekpb=weekpb+parseInt(data[j]['pb'])
              weekor=weekor+parseInt(data[j]['or'])
              weekbr=weekbr+parseInt(data[j]['br'])
              weekut=weekut+parseInt(data[j]['ut'])
              weekas=weekas+parseInt(data[j]['as'])
              weekch=weekch+parseInt(data[j]['ch'])
              weekhp=weekhp+parseInt(data[j]['hp'])
              weekla=weekla+parseInt(data[j]['la'])
              weekan=weekan+parseInt(data[j]['an'])
              weekct=weekct+parseInt(data[j]['ct'])
              weekga=weekga+parseInt(data[j]['ga'])
              weekpy=weekpy+parseInt(data[j]['py'])
              weekjh=weekjh+parseInt(data[j]['jh'])
              weekmn=weekmn+parseInt(data[j]['mn'])
              weekar=weekar+parseInt(data[j]['ar'])
              weekdn=weekdn+parseInt(data[j]['dn'])
              weekmz=weekmz+parseInt(data[j]['mz'])
              weektr=weektr+parseInt(data[j]['tr'])
            }

          }
          }
        covid.push(week)
        covidtg.push(weektg)
        covidmh.push(weekmh)
        covidtn.push(weektn)
        coviddl.push(weekdl)
        covidkl.push(weekkl)
        covidup.push(weekup)
        covidap.push(weekap)
        covidrj.push(weekrj)
        covidmp.push(weekmp)
        covidka.push(weekka)
        covidgj.push(weekgj)
        covidhr.push(weekhr)
        covidjk.push(weekjk)
        covidwb.push(weekwb)
        covidpb.push(weekpb)
        covidor.push(weekor)
        covidbr.push(weekbr)
        covidut.push(weekut)
        covidas.push(weekas)
        covidch.push(weekch)
        covidhp.push(weekhp)
        covidla.push(weekla)
        covidan.push(weekan)
        covidct.push(weekct)
        covidga.push(weekga)
        covidpy.push(weekpy)
        covidjh.push(weekjh)
        covidmn.push(weekmn)
        covidar.push(weekar)
        coviddn.push(weekdn)
        covidmz.push(weekmz)
        covidtr.push(weektr)
      }
    }
    // console.log(covid);
    // console.log(tt);
    result=[]
    for (var i = 0; i < tt.length; i++) {
      result.push({
        'tt':tt[i], 'covid':covid[i],
        'tg':tg[i], 'covidtg':covidtg[i],
        'mh':mh[i], 'covidmh':covidmh[i],
        'tn':tn[i], 'covidtn':covidtn[i],
        'dl':dl[i], 'coviddl':coviddl[i],
        'kl':kl[i], 'covidkl':covidkl[i],
        'up':up[i], 'covidup':covidup[i],
        'ap':ap[i], 'covidap':covidap[i],
        'rj':rj[i], 'covidrj':covidrj[i],
        'mp':mp[i], 'covidmp':covidmp[i],
        'ka':ka[i], 'covidka':covidka[i],
        'gj':gj[i], 'covidgj':covidgj[i],
        'hr':hr[i], 'covidhr':covidhr[i],
        'jk':jk[i], 'covidjk':covidjk[i],
        'wb':wb[i], 'covidwb':covidwb[i],
        'pb':pb[i], 'covidpb':covidpb[i],
        'or':or[i], 'covidor':covidor[i],
        'br':br[i], 'covidbr':covidbr[i],
        'ut':ut[i], 'covidut':covidut[i],
        'as':as[i], 'covidas':covidas[i],
        'ch':ch[i], 'covidch':covidch[i],
        'hp':hp[i], 'covidhp':covidhp[i],
        'la':la[i], 'covidla':covidla[i],
        'an':an[i], 'covidan':covidan[i],
        'ct':ct[i], 'covidct':covidct[i],
        'ga':ga[i], 'covidga':covidga[i],
        'py':py[i], 'covidpy':covidpy[i],
        'jh':jh[i], 'covidjh':covidjh[i],
        'mn':mn[i], 'covidmn':covidmn[i],
        'ar':ar[i], 'covidar':covidar[i],
        'dn':dn[i], 'coviddn':coviddn[i],
        'mz':mz[i], 'covidmz':covidmz[i],
        'tr':tr[i], 'covidtr':covidtr[i]
      })
    }
    // console.log(result);
    // res.render('covid19_india', { result:result});
    // res.end();
      res.write(JSON.stringify(result));
      res.end();
  });
}

module.exports.view=function (req, res) {
  apiCallFromNode.callApi(function(response){
    data=JSON.parse(response)['states_daily'];
    // console.log(data['states_daily'])
    var total=0
    var telangana=0
    var maharashtra=0
    var tamilnadu=0
    var delhi=0
    var kerala=0
    var uttarpradesh=0
    var andhrapradesh=0
    var rajasthan=0
    var madhyapradesh=0
    var karnataka=0
    var gujarat=0
    var haryana=0
    var jammukashmir=0
    var westbengal=0
    var punjab=0
    var odisha=0
    var bihar=0
    var uttarakhand=0
    var assam=0
    var chandigarh=0
    var himachalpradesh=0
    var ladakh=0
    var andamannicobar=0
    var chattisgarh=0
    var goa=0
    var puducherry=0
    var jharkhand=0
    var manipur=0
    var arunachalpradesh=0
    var darahaveli=0
    var mizoram=0
    var tripura=0

    var tt=[]
    var tg=[]
    var mh=[]
    var tn=[]
    var dl=[]
    var kl=[]
    var up=[]
    var ap=[]
    var rj=[]
    var mp=[]
    var ka=[]
    var gj=[]
    var hr=[]
    var jk=[]
    var wb=[]
    var pb=[]
    var or=[]
    var br=[]
    var ut=[]
    var as=[]
    var ch=[]
    var hp=[]
    var la=[]
    var an=[]
    var ct=[]
    var ga=[]
    var py=[]
    var jh=[]
    var mn=[]
    var ar=[]
    var dn=[]
    var mz=[]
    var tr=[]

    var covid=[]
    var covidtg=[]
    var covidmh=[]
    var covidtn=[]
    var coviddl=[]
    var covidkl=[]
    var covidup=[]
    var covidap=[]
    var covidrj=[]
    var covidmp=[]
    var covidka=[]
    var covidgj=[]
    var covidhr=[]
    var covidjk=[]
    var covidwb=[]
    var covidpb=[]
    var covidor=[]
    var covidbr=[]
    var covidut=[]
    var covidas=[]
    var covidch=[]
    var covidhp=[]
    var covidla=[]
    var covidan=[]
    var covidct=[]
    var covidga=[]
    var covidpy=[]
    var covidjh=[]
    var covidmn=[]
    var covidar=[]
    var coviddn=[]
    var covidmz=[]
    var covidtr=[]

    for(i=0;i<data.length; i++){
      if (data[i]['status']=='Confirmed') {
        total=total+parseInt(data[i]['tt'])
        telangana=telangana+parseInt(data[i]['tg'])
        maharashtra=maharashtra+parseInt(data[i]['mh'])
        tamilnadu=tamilnadu+parseInt(data[i]['tn'])
        delhi=delhi+parseInt(data[i]['dl'])
        kerala=kerala+parseInt(data[i]['kl'])
        uttarpradesh=uttarpradesh+parseInt(data[i]['up'])
        andhrapradesh=andhrapradesh+parseInt(data[i]['ap'])
        rajasthan=rajasthan+parseInt(data[i]['rj'])
        madhyapradesh=madhyapradesh+parseInt(data[i]['mp'])
        karnataka=karnataka+parseInt(data[i]['ka'])
        gujarat=gujarat+parseInt(data[i]['gj'])
        haryana=haryana+parseInt(data[i]['hr'])
        jammukashmir=jammukashmir+parseInt(data[i]['jk'])
        westbengal=westbengal+parseInt(data[i]['wb'])
        punjab=punjab+parseInt(data[i]['pb'])
        odisha=odisha+parseInt(data[i]['or'])
        bihar=bihar+parseInt(data[i]['br'])
        uttarakhand=uttarakhand+parseInt(data[i]['ut'])
        assam=assam+parseInt(data[i]['as'])
        chandigarh=chandigarh+parseInt(data[i]['ch'])
        himachalpradesh=himachalpradesh+parseInt(data[i]['hp'])
        ladakh=ladakh+parseInt(data[i]['la'])
        andamannicobar=andamannicobar+parseInt(data[i]['an'])
        chattisgarh=chattisgarh+parseInt(data[i]['ct'])
        goa=goa+parseInt(data[i]['ga'])
        puducherry=puducherry+parseInt(data[i]['py'])
        jharkhand=jharkhand+parseInt(data[i]['jh'])
        manipur=manipur+parseInt(data[i]['mn'])
        arunachalpradesh=arunachalpradesh+parseInt(data[i]['ar'])
        darahaveli=darahaveli+parseInt(data[i]['dn'])
        mizoram=mizoram+parseInt(data[i]['mz'])
        tripura=tripura+parseInt(data[i]['tr'])

        tt.push(total)
        tg.push(telangana)
        mh.push(maharashtra)
        tn.push(tamilnadu)
        dl.push(delhi)
        kl.push(kerala)
        up.push(uttarpradesh)
        ap.push(andhrapradesh)
        rj.push(rajasthan)
        mp.push(madhyapradesh)
        ka.push(karnataka)
        gj.push(gujarat)
        hr.push(haryana)
        jk.push(jammukashmir)
        wb.push(westbengal)
        pb.push(punjab)
        or.push(odisha)
        br.push(bihar)
        ut.push(uttarakhand)
        as.push(assam)
        ch.push(chandigarh)
        hp.push(himachalpradesh)
        la.push(ladakh)
        an.push(andamannicobar)
        ct.push(chattisgarh)
        ga.push(goa)
        py.push(puducherry)
        jh.push(jharkhand)
        mn.push(manipur)
        ar.push(arunachalpradesh)
        dn.push(darahaveli)
        mz.push(mizoram)
        tr.push(tripura)

        week=0
        weektg=0
        weekmh=0
        weektn=0
        weekdl=0
        weekkl=0
        weekup=0
        weekap=0
        weekrj=0
        weekmp=0
        weekka=0
        weekgj=0
        weekhr=0
        weekjk=0
        weekwb=0
        weekpb=0
        weekor=0
        weekbr=0
        weekut=0
        weekas=0
        weekch=0
        weekhp=0
        weekla=0
        weekan=0
        weekct=0
        weekga=0
        weekpy=0
        weekjh=0
        weekmn=0
        weekar=0
        weekdn=0
        weekmz=0
        weektr=0

        datei=new Date(data[i]['date'])
        date7=new Date(data[i]['date'])
        date7.setDate(date7.getDate() -7);
        for(j=0;j<data.length; j++){
          if (data[j]['status']=='Confirmed') {
            datej=new Date(data[j]['date'])
            // console.log(date7.getTime());
            // console.log(datej.getTime());
            // console.log(datei.getTime());
            // console.log(datej.getTime()<=datei.getTime());
            if (date7.getTime()<datej.getTime() && datej.getTime()<=datei.getTime()) {

              week=week+parseInt(data[j]['tt'])
              weektg=weektg+parseInt(data[j]['tg'])
              weekmh=weekmh+parseInt(data[j]['mh'])
              weektn=weektn+parseInt(data[j]['tn'])
              weekdl=weekdl+parseInt(data[j]['dl'])
              weekkl=weekkl+parseInt(data[j]['kl'])
              weekup=weekup+parseInt(data[j]['up'])
              weekap=weekap+parseInt(data[j]['ap'])
              weekrj=weekrj+parseInt(data[j]['rj'])
              weekmp=weekmp+parseInt(data[j]['mp'])
              weekka=weekka+parseInt(data[j]['ka'])
              weekgj=weekgj+parseInt(data[j]['gj'])
              weekhr=weekhr+parseInt(data[j]['hr'])
              weekjk=weekjk+parseInt(data[j]['jk'])
              weekwb=weekwb+parseInt(data[j]['wb'])
              weekpb=weekpb+parseInt(data[j]['pb'])
              weekor=weekor+parseInt(data[j]['or'])
              weekbr=weekbr+parseInt(data[j]['br'])
              weekut=weekut+parseInt(data[j]['ut'])
              weekas=weekas+parseInt(data[j]['as'])
              weekch=weekch+parseInt(data[j]['ch'])
              weekhp=weekhp+parseInt(data[j]['hp'])
              weekla=weekla+parseInt(data[j]['la'])
              weekan=weekan+parseInt(data[j]['an'])
              weekct=weekct+parseInt(data[j]['ct'])
              weekga=weekga+parseInt(data[j]['ga'])
              weekpy=weekpy+parseInt(data[j]['py'])
              weekjh=weekjh+parseInt(data[j]['jh'])
              weekmn=weekmn+parseInt(data[j]['mn'])
              weekar=weekar+parseInt(data[j]['ar'])
              weekdn=weekdn+parseInt(data[j]['dn'])
              weekmz=weekmz+parseInt(data[j]['mz'])
              weektr=weektr+parseInt(data[j]['tr'])
            }

          }
          }
        covid.push(week)
        covidtg.push(weektg)
        covidmh.push(weekmh)
        covidtn.push(weektn)
        coviddl.push(weekdl)
        covidkl.push(weekkl)
        covidup.push(weekup)
        covidap.push(weekap)
        covidrj.push(weekrj)
        covidmp.push(weekmp)
        covidka.push(weekka)
        covidgj.push(weekgj)
        covidhr.push(weekhr)
        covidjk.push(weekjk)
        covidwb.push(weekwb)
        covidpb.push(weekpb)
        covidor.push(weekor)
        covidbr.push(weekbr)
        covidut.push(weekut)
        covidas.push(weekas)
        covidch.push(weekch)
        covidhp.push(weekhp)
        covidla.push(weekla)
        covidan.push(weekan)
        covidct.push(weekct)
        covidga.push(weekga)
        covidpy.push(weekpy)
        covidjh.push(weekjh)
        covidmn.push(weekmn)
        covidar.push(weekar)
        coviddn.push(weekdn)
        covidmz.push(weekmz)
        covidtr.push(weektr)
      }
    }
    // console.log(covid);
    // console.log(tt);
    result=[]
    for (var i = 0; i < tt.length; i++) {
      result.push({
        'tt':tt[i], 'covid':covid[i],
        'tg':tg[i], 'covidtg':covidtg[i],
        'mh':mh[i], 'covidmh':covidmh[i],
        'tn':tn[i], 'covidtn':covidtn[i],
        'dl':dl[i], 'coviddl':coviddl[i],
        'kl':kl[i], 'covidkl':covidkl[i],
        'up':up[i], 'covidup':covidup[i],
        'ap':ap[i], 'covidap':covidap[i],
        'rj':rj[i], 'covidrj':covidrj[i],
        'mp':mp[i], 'covidmp':covidmp[i],
        'ka':ka[i], 'covidka':covidka[i],
        'gj':gj[i], 'covidgj':covidgj[i],
        'hr':hr[i], 'covidhr':covidhr[i],
        'jk':jk[i], 'covidjk':covidjk[i],
        'wb':wb[i], 'covidwb':covidwb[i],
        'pb':pb[i], 'covidpb':covidpb[i],
        'or':or[i], 'covidor':covidor[i],
        'br':br[i], 'covidbr':covidbr[i],
        'ut':ut[i], 'covidut':covidut[i],
        'as':as[i], 'covidas':covidas[i],
        'ch':ch[i], 'covidch':covidch[i],
        'hp':hp[i], 'covidhp':covidhp[i],
        'la':la[i], 'covidla':covidla[i],
        'an':an[i], 'covidan':covidan[i],
        'ct':ct[i], 'covidct':covidct[i],
        'ga':ga[i], 'covidga':covidga[i],
        'py':py[i], 'covidpy':covidpy[i],
        'jh':jh[i], 'covidjh':covidjh[i],
        'mn':mn[i], 'covidmn':covidmn[i],
        'ar':ar[i], 'covidar':covidar[i],
        'dn':dn[i], 'coviddn':coviddn[i],
        'mz':mz[i], 'covidmz':covidmz[i],
        'tr':tr[i], 'covidtr':covidtr[i]
      })
    }
    // console.log(result);
    res.render('covid19_india', { result:result});
    res.end();
      // res.write(JSON.stringify(result));
      // res.end();
  });
}
