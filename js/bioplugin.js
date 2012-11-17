// Check To See If BioPlugin Client Is Installed
function IsClientInstalled(){
	document.getElementById("Output").innerHTML="IsClientInstalled="+BioPlugInActX.IsClientInstalled();
}
// Check To See If BioPlugin Client Is Running
function IsClientRunning(){
	document.getElementById("Output").innerHTML="IsClientRunning="+BioPlugInActX.IsClientRunning();
}


// Start Identify Single Scanning Mode
function StartScanning(){
	BioPlugInActX.SetImageDisplayMode();
	BioPlugInActX.StartActiveIdentification(WindowPosition.value);
}
// Stop Identify Single Scanning Mode
function StopScanning(){
	BioPlugInActX.StopActiveIdentification();
}
// Cancel Active Registration/Update
function CancelRegistration(){
	BioPlugInActX.CancelRegistrationRequest();
}

// Server Recache
function ServerRecache(){
	BioPlugInActX.RefreshCache();
}


// Check Scanner Status
function ScannerStatus(){
		BioPlugInActX.GetScannerStatus();
}
// List Total Number Of Scanners Found - OnScannerStatus
function ScannerCount(){
	BioPlugInActX.GetScannerCount();
}
// List All Scanners Found - OnScannerStatus
function ListScanners(){
	BioPlugInActX.GetScannerList();
}


// Show Current Engine Type
function GetEngineType(){
		BioPlugInActX.GetEngineType();
}
// Change Current Engine Type
function SetEngineType(){
		BioPlugInActX.SetEngineType(EngineType.value);
}
// Show Available Engine Types
function ListEngineType(){
		BioPlugInActX.GetAvailableEngines();
}


// Show Current BioPlugin Server Info
function GetServerInfo(){
		BioPlugInActX.GetServerInfo();
}
// Change BioPlugin Server Info
function SetServerInfo(){
		BioPlugInActX.SetServerInfo(ServerInfo.value,ServerInfoPort.value);
}


// Show Current Location ID
function GetLocationID(){
		BioPlugInActX.GetLocationID();
}
// Change Location ID
function SetLocationID(){
		BioPlugInActX.SetLocationID(LocationID.value);
}


// Show Current NoMatchFound Value
function GetNoMatchFoundValue(){
		BioPlugInActX.GetNoMatchFoundValue();
}
// Change NoMatchFound Value
function SetNoMatchFoundValue(){
		BioPlugInActX.SetNoMatchFoundValue(NoMatchFound.value);
}


// Register A New User's Biometric Data - Two Sources, Three Scans Each
function Register(){
	BioPlugInActX.RegisterPrint(Input.value);
}
// Register A New User's Biometric Data - Two Sources, One Scan Each
function RegisterShort(){
	BioPlugInActX.RegisterPrintShort(Input.value);
}
// Register A New User's Biometric Data - One Source, Three Scans
function RegisterSingle(){
	BioPlugInActX.RegisterSinglePrint(Input.value);
}
// Register A New User's Biometric Data - One Source, One Scan
function RegisterSingleShort(){
	BioPlugInActX.RegisterSinglePrintShort(Input.value);
}


// Update A User's Biometric Data - Two Sources, Three Scans Each
function Update(){
	BioPlugInActX.UpdatePrint(Input.value);
}
// Update A User's Biometric Data - Two Sources, One Scan Each
function UpdateShort(){
	BioPlugInActX.UpdatePrintShort(Input.value);
}
// Update A User's Biometric Data - One Source, Three Scans
function UpdateSingle(){
	BioPlugInActX.UpdateSinglePrint(Input.value);
}
// Update A User's Biometric Data - One Source, One Scan
function UpdateSingleShort(){
	BioPlugInActX.UpdateSinglePrintShort(Input.value);
}


// Query Database To See If User Is Already Registered
function IsRegistered(){
	BioPlugInActX.IsRegistered(Input.value);
}
// Change A User's Biometric Data ID
function ChangeID(){
	var txt="<h2>Enter New Member ID</h2><input type='text' id='NewID' name='NewID' />";
	$.prompt(txt,{
		callback:function(e,v,m,f){
			BioPlugInActX.ChangeID(Input.value,f.NewID);
		}
	});
}
// Delete A User's Biometric Data
function DeleteID(){
	BioPlugInActX.DeletePrint(Input.value);
}


// Verify A User - Two Sources, Three Scans Each
function Verify(){
	BioPlugInActX.VerifyPrint(Input.value);
}
// Verify A User - One Source, One Scan
function VerifyQuick(){
	BioPlugInActX.VerifyQuick(Input.value);
}
// Verify A User - One Source, One Scan
function VerifySingle(){
	BioPlugInActX.VerifySinglePrint(Input.value);
}


// Identify A User - Two Sources, Three Scans Each
function Identify(){
	BioPlugInActX.Identify();
}
// Identify A User - One Source, One Scan
function IdentifyQuick(){
	BioPlugInActX.IdentifyQuick(WindowPosition.value);
}