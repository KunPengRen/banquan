pragma solidity ^0.4.24;

contract Banquan{
    
    struct BanQuan{
        address useraddress;
        string user;
        string docname;
        string time;
        string info;
        string dochash;
    }
    uint public numbanquans;
    mapping(uint => BanQuan) public banquans;
    function Banquan(){
        numbanquans = 0;
    }
    function newBanquan(address useraddress,string user,string docname,string time,string info,string dochash) returns(uint  banquanID){
        banquanID = numbanquans++;
        banquans[banquanID] = BanQuan(useraddress,user,docname,time,info,dochash);
    }
    function getBanquan(uint banquanID) returns(address ,string ,string ,string ,string ,string ) {
        BanQuan banquan = banquans[banquanID];
        return (banquan.useraddress,banquan.user,banquan.docname,banquan.time,banquan.info,banquan.dochash);
    }
} 