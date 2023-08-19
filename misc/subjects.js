const subjects = ['https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AAS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ABE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ACCY.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ACE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ACES.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ADV.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AFAS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AFRO.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AFST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AGCM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AGED.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AHS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/AIS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ALEC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ANSC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ANTH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARAB.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARCH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ART.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARTD.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARTE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARTF.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARTH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ARTS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ASRM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ASST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ASTR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ATMS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BADM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BASQ.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BCOG.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BCS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BDI.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BIOC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BIOE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BIOL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BIOP.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BSE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BTW.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/BUS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CB.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CDB.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CEE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CHBE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CHEM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CHIN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CHLH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CHP.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CI.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CIC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CLCV.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CLE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CMN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CPSC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CSE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CW.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CWL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/CZCH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/DANC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EALC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ECE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ECON.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EDPR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EDUC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EIL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ENG.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ENGH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ENGL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ENSU.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ENT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ENVS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EOL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EPOL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EPS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EPSY.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ESE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ESL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/EURO.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/FAA.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/FIN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/FLTE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/FR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/FSHN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GEOG.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GEOL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GER.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GLBL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GMC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GRK.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GRKM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/GWS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HDFS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HEBR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HIST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HNDI.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HORT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HRD.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/HUM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/IB.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/IE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/IHLT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/INFO.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/IS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ITAL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/JAPN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/JOUR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/JS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/KIN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/KOR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LA.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LAS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LAST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LAT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LAW.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LCTL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LEAD.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LER.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LING.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/LLS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MACS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MATH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MBA.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MCB.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MDIA.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MDVL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/ME.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MFST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MICR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MILS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MIP.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MSE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MUS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MUSC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/MUSE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/NEUR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/NPRE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/NRES.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/NS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/NUTR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PATH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PBIO.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PERS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PHIL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PHYS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PLPA.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/POL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PORT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PSM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/PSYC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/REES.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/REHB.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/REL.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/RHET.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/RMLG.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/RST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/RUSS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SAME.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SBC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SCAN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SHS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SLAV.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SLS.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SOC.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SOCW.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SPAN.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SPED.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/STAT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/SWAH.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/TAM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/TE.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/THEA.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/TMGT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/TRST.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/TSM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/TURK.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/UKR.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/UP.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/VCM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/VM.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/WGGP.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/WLOF.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/WRIT.xml',
    'https://courses.illinois.edu/cisapp/explorer/catalog/2021/spring/YDSH.xml']

module.exports = { subjects }