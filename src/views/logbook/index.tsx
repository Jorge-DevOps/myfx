import { useCallback } from "react"
import Table from "../../common/components/Table"
import { Button, Container, Grid, Box } from '@mui/material'
import { Modal } from "../../common/components"
import { useLogBook } from "./hooks/useLogBook"
import { AddForm } from "./components/form/AddForm"



export const Logbook = () => {

    const handle = useCallback((row: any, op: any) => {
        if (op === 'delete') {
            console.log("op", row.original)
        }
        if (op === 'edit') {
            console.log("op", row.original)
        }
    }, [])



    const obtenerData = () => {
        return new Promise(resolve => {
            const data = [
                {
                    id: 1,
                    Result: "GANADA",
                    currency: "RUB",
                    Link_tradingview:
                        "https://odnoklassniki.ru/venenatis/tristique/fusce.jpg?primis=lorem&in=quisque&faucibus=ut&orci=erat&luctus=curabitur&et=gravida&ultrices=nisi&posuere=at&cubilia=nibh&curae=in&donec=hac&pharetra=habitasse&magna=platea&vestibulum=dictumst&aliquet=aliquam&ultrices=augue&erat=quam&tortor=sollicitudin&sollicitudin=vitae&mi=consectetuer&sit=eget&amet=rutrum&lobortis=at&sapien=lorem&sapien=integer&non=tincidunt&mi=ante&integer=vel&ac=ipsum&neque=praesent&duis=blandit&bibendum=lacinia&morbi=erat&non=vestibulum&quam=sed&nec=magna&dui=at&luctus=nunc",
                    Date: "3/3/2020",
                    Strategy: "OrderBlock",
                    Order: "BUY",
                    Price: 13.6742,
                    pips_SL: 15,
                    SL: 95,
                    pips_TP: 24,
                    TP: 82,
                    lotage: 48.0,
                    Temporality: 3,
                    Desc_Result:
                        "integer pede justo lacinia eget tincidunt eget tempus vel pede morbi",
                    Observations:
                        "rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
                    Performance: 98,
                },
                {
                    id: 2,
                    Result: "PERDIDA",
                    currency: "ARS",
                    Link_tradingview:
                        "http://woothemes.com/mus.js?lectus=condimentum&pellentesque=curabitur&at=in&nulla=libero&suspendisse=ut&potenti=massa&cras=volutpat&in=convallis&purus=morbi&eu=odio&magna=odio&vulputate=elementum&luctus=eu&cum=interdum&sociis=eu&natoque=tincidunt&penatibus=in&et=leo&magnis=maecenas&dis=pulvinar&parturient=lobortis&montes=est&nascetur=phasellus&ridiculus=sit&mus=amet&vivamus=erat&vestibulum=nulla&sagittis=tempus&sapien=vivamus&cum=in&sociis=felis&natoque=eu&penatibus=sapien&et=cursus&magnis=vestibulum&dis=proin&parturient=eu&montes=mi&nascetur=nulla&ridiculus=ac&mus=enim&etiam=in&vel=tempor&augue=turpis&vestibulum=nec&rutrum=euismod&rutrum=scelerisque&neque=quam&aenean=turpis&auctor=adipiscing&gravida=lorem&sem=vitae&praesent=mattis&id=nibh&massa=ligula&id=nec&nisl=sem&venenatis=duis&lacinia=aliquam&aenean=convallis&sit=nunc&amet=proin&justo=at&morbi=turpis&ut=a&odio=pede&cras=posuere&mi=nonummy&pede=integer&malesuada=non",
                    Date: "10/19/2021",
                    Strategy: "OrderBlock",
                    Order: "BUY",
                    Price: 30.5789,
                    pips_SL: 78,
                    SL: 41,
                    pips_TP: 42,
                    TP: 3,
                    lotage: 47.8,
                    Temporality: 3,
                    Desc_Result:
                        "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
                    Observations:
                        "ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
                    Performance: 29,
                },
                {
                    id: 3,
                    Result: "GANADA",
                    currency: "BRL",
                    Link_tradingview:
                        "https://360.cn/ante/vivamus/tortor/duis/mattis.png?eget=luctus&tempus=cum&vel=sociis&pede=natoque&morbi=penatibus&porttitor=et&lorem=magnis&id=dis&ligula=parturient&suspendisse=montes&ornare=nascetur&consequat=ridiculus&lectus=mus&in=vivamus&est=vestibulum&risus=sagittis&auctor=sapien&sed=cum&tristique=sociis&in=natoque&tempus=penatibus&sit=et&amet=magnis&sem=dis&fusce=parturient&consequat=montes&nulla=nascetur&nisl=ridiculus&nunc=mus&nisl=etiam&duis=vel&bibendum=augue&felis=vestibulum&sed=rutrum&interdum=rutrum&venenatis=neque&turpis=aenean&enim=auctor&blandit=gravida&mi=sem&in=praesent&porttitor=id&pede=massa&justo=id&eu=nisl&massa=venenatis&donec=lacinia&dapibus=aenean&duis=sit&at=amet&velit=justo&eu=morbi&est=ut&congue=odio&elementum=cras&in=mi&hac=pede&habitasse=malesuada&platea=in&dictumst=imperdiet&morbi=et&vestibulum=commodo&velit=vulputate&id=justo&pretium=in&iaculis=blandit&diam=ultrices&erat=enim&fermentum=lorem&justo=ipsum&nec=dolor&condimentum=sit&neque=amet&sapien=consectetuer&placerat=adipiscing&ante=elit&nulla=proin&justo=interdum&aliquam=mauris&quis=non&turpis=ligula&eget=pellentesque&elit=ultrices&sodales=phasellus&scelerisque=id&mauris=sapien&sit=in&amet=sapien&eros=iaculis&suspendisse=congue&accumsan=vivamus&tortor=metus&quis=arcu&turpis=adipiscing&sed=molestie",
                    Date: "3/15/2020",
                    Strategy: "OrderBlock",
                    Order: "BUY",
                    Price: 30.047,
                    pips_SL: 94,
                    SL: 30,
                    pips_TP: 23,
                    TP: 15,
                    lotage: 1.2,
                    Temporality: 4,
                    Desc_Result:
                        "cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
                    Observations:
                        "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at",
                    Performance: 37,
                },
                {
                    id: 4,
                    Result: "GANADA",
                    currency: "PKR",
                    Link_tradingview:
                        "http://imgur.com/in/porttitor/pede/justo/eu/massa.xml?justo=interdum&sit=mauris&amet=non&sapien=ligula&dignissim=pellentesque&vestibulum=ultrices&vestibulum=phasellus&ante=id&ipsum=sapien&primis=in&in=sapien&faucibus=iaculis&orci=congue&luctus=vivamus&et=metus&ultrices=arcu&posuere=adipiscing&cubilia=molestie&curae=hendrerit&nulla=at&dapibus=vulputate&dolor=vitae&vel=nisl&est=aenean&donec=lectus&odio=pellentesque&justo=eget&sollicitudin=nunc&ut=donec&suscipit=quis&a=orci&feugiat=eget&et=orci&eros=vehicula&vestibulum=condimentum&ac=curabitur&est=in&lacinia=libero&nisi=ut&venenatis=massa&tristique=volutpat&fusce=convallis&congue=morbi&diam=odio&id=odio&ornare=elementum&imperdiet=eu&sapien=interdum&urna=eu&pretium=tincidunt&nisl=in&ut=leo&volutpat=maecenas&sapien=pulvinar&arcu=lobortis&sed=est&augue=phasellus&aliquam=sit&erat=amet&volutpat=erat&in=nulla&congue=tempus&etiam=vivamus&justo=in&etiam=felis",
                    Date: "8/11/2020",
                    Strategy: "OrderBlock",
                    Order: "SELL",
                    Price: 27.9872,
                    pips_SL: 3,
                    SL: 72,
                    pips_TP: 16,
                    TP: 39,
                    lotage: 32.3,
                    Temporality: 2,
                    Desc_Result:
                        "maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
                    Observations:
                        "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
                    Performance: 2,
                },
                {
                    id: 5,
                    Result: "GANADA",
                    currency: "JPY",
                    Link_tradingview:
                        "http://gravatar.com/amet/justo.js?mauris=morbi&viverra=ut&diam=odio&vitae=cras&quam=mi&suspendisse=pede&potenti=malesuada&nullam=in&porttitor=imperdiet&lacus=et&at=commodo&turpis=vulputate&donec=justo&posuere=in&metus=blandit&vitae=ultrices&ipsum=enim&aliquam=lorem&non=ipsum&mauris=dolor&morbi=sit&non=amet&lectus=consectetuer&aliquam=adipiscing&sit=elit&amet=proin&diam=interdum&in=mauris&magna=non&bibendum=ligula&imperdiet=pellentesque&nullam=ultrices&orci=phasellus&pede=id&venenatis=sapien&non=in&sodales=sapien&sed=iaculis&tincidunt=congue&eu=vivamus&felis=metus&fusce=arcu&posuere=adipiscing&felis=molestie&sed=hendrerit&lacus=at&morbi=vulputate&sem=vitae&mauris=nisl&laoreet=aenean&ut=lectus&rhoncus=pellentesque&aliquet=eget&pulvinar=nunc&sed=donec&nisl=quis&nunc=orci&rhoncus=eget&dui=orci&vel=vehicula&sem=condimentum&sed=curabitur",
                    Date: "1/4/2022",
                    Strategy: "OrderBlock",
                    Order: "SELL LIMIT",
                    Price: 22.6867,
                    pips_SL: 25,
                    SL: 10,
                    pips_TP: 66,
                    TP: 30,
                    lotage: 94.6,
                    Temporality: 2,
                    Desc_Result:
                        "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere",
                    Observations:
                        "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
                    Performance: 21,
                },
                {
                    id: 6,
                    Result: "GANADA",
                    currency: "JPY",
                    Link_tradingview:
                        "http://gravatar.com/amet/justo.js?mauris=morbi&viverra=ut&diam=odio&vitae=cras&quam=mi&suspendisse=pede&potenti=malesuada&nullam=in&porttitor=imperdiet&lacus=et&at=commodo&turpis=vulputate&donec=justo&posuere=in&metus=blandit&vitae=ultrices&ipsum=enim&aliquam=lorem&non=ipsum&mauris=dolor&morbi=sit&non=amet&lectus=consectetuer&aliquam=adipiscing&sit=elit&amet=proin&diam=interdum&in=mauris&magna=non&bibendum=ligula&imperdiet=pellentesque&nullam=ultrices&orci=phasellus&pede=id&venenatis=sapien&non=in&sodales=sapien&sed=iaculis&tincidunt=congue&eu=vivamus&felis=metus&fusce=arcu&posuere=adipiscing&felis=molestie&sed=hendrerit&lacus=at&morbi=vulputate&sem=vitae&mauris=nisl&laoreet=aenean&ut=lectus&rhoncus=pellentesque&aliquet=eget&pulvinar=nunc&sed=donec&nisl=quis&nunc=orci&rhoncus=eget&dui=orci&vel=vehicula&sem=condimentum&sed=curabitur",
                    Date: "1/4/2022",
                    Strategy: "OrderBlock",
                    Order: "SELL LIMIT",
                    Price: 22.6867,
                    pips_SL: 25,
                    SL: 10,
                    pips_TP: 66,
                    TP: 30,
                    lotage: 94.6,
                    Temporality: 2,
                    Desc_Result:
                        "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere",
                    Observations:
                        "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
                    Performance: 21,
                },
                {
                    id: 7,
                    Result: "GANADA",
                    currency: "JPY",
                    Link_tradingview:
                        "http://gravatar.com/amet/justo.js?mauris=morbi&viverra=ut&diam=odio&vitae=cras&quam=mi&suspendisse=pede&potenti=malesuada&nullam=in&porttitor=imperdiet&lacus=et&at=commodo&turpis=vulputate&donec=justo&posuere=in&metus=blandit&vitae=ultrices&ipsum=enim&aliquam=lorem&non=ipsum&mauris=dolor&morbi=sit&non=amet&lectus=consectetuer&aliquam=adipiscing&sit=elit&amet=proin&diam=interdum&in=mauris&magna=non&bibendum=ligula&imperdiet=pellentesque&nullam=ultrices&orci=phasellus&pede=id&venenatis=sapien&non=in&sodales=sapien&sed=iaculis&tincidunt=congue&eu=vivamus&felis=metus&fusce=arcu&posuere=adipiscing&felis=molestie&sed=hendrerit&lacus=at&morbi=vulputate&sem=vitae&mauris=nisl&laoreet=aenean&ut=lectus&rhoncus=pellentesque&aliquet=eget&pulvinar=nunc&sed=donec&nisl=quis&nunc=orci&rhoncus=eget&dui=orci&vel=vehicula&sem=condimentum&sed=curabitur",
                    Date: "1/4/2022",
                    Strategy: "OrderBlock",
                    Order: "SELL LIMIT",
                    Price: 22.6867,
                    pips_SL: 25,
                    SL: 10,
                    pips_TP: 66,
                    TP: 30,
                    lotage: 94.6,
                    Temporality: 2,
                    Desc_Result:
                        "adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere",
                    Observations:
                        "mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
                    Performance: 21,
                },
            ];
            resolve(data);
        });
    }

    const fetchData = useCallback(async (params: any) => {
        return await obtenerData()
    }, [])


    const { openModal, toggleModal } = useLogBook()

    return (
        <>
            <Modal title={'Agregar Operacion'} open={openModal} onclose={() => toggleModal()}>
                <AddForm onReset={() => { }} onSubmit={() => { }}  />
            </Modal>
            <Box
                sx={{
                    color: "#999",
                    fontSize: "12px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "2rem 0 10rem 0"
                }}
            >
                <Container maxWidth="xl" sx={{ margin: "2rem", display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" onClick={() => toggleModal()}>Nueva Operación</Button>
                </Container>

                <Container maxWidth="xl" >
                    <Table
                        name="logbook"
                        handle={handle}
                        TableHeader={<h1 style={{ color: "white", fontSize: "1.3rem" }}>Logbook </h1>}
                        enableEditing={true}
                        fetchData={fetchData}
                        delete={true}
                        // reload={reloadTable}
                        edit={true}
                    />

                </Container>
            </Box>
        </>


    )

}