



CREATE TABLE "Vendor"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "User"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Surname" NVARCHAR2(255) NULL,

	"isAdmin" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Operations"
(

	"primaryKey" RAW(16) NOT NULL,

	"Date" DATE NULL,

	"Action" NVARCHAR2(7) NULL,

	"State" NVARCHAR2(9) NULL,

	"Hardware_m0" RAW(16) NOT NULL,

	"Admin_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Hardware"
(

	"primaryKey" RAW(16) NOT NULL,

	"InventoryNumber" NVARCHAR2(255) NULL,

	"Name" NVARCHAR2(255) NULL,

	"DateAdded" DATE NULL,

	"HardwareType_m0" RAW(16) NOT NULL,

	"Employee_m0" RAW(16) NOT NULL,

	"Workplace_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Software"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Version" NVARCHAR2(255) NULL,

	"isFreeware" NUMBER(1) NULL,

	"Vendor_m0" RAW(16) NOT NULL,

	"Workplace_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "BranchOffice"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	"Address" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Workplace"
(

	"primaryKey" RAW(16) NOT NULL,

	"InventoryNumber" NVARCHAR2(255) NULL,

	"OfficeNumber" NVARCHAR2(255) NULL,

	"Place" NVARCHAR2(255) NULL,

	"Branch_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "HardwareType"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Operations"
	ADD CONSTRAINT "Operations_FHardware_0" FOREIGN KEY ("Hardware_m0") REFERENCES "Hardware" ("primaryKey");

CREATE INDEX "Operations_IHardware_m0" on "Operations" ("Hardware_m0");

ALTER TABLE "Operations"
	ADD CONSTRAINT "Operations_FUser_0" FOREIGN KEY ("Admin_m0") REFERENCES "User" ("primaryKey");

CREATE INDEX "Operations_IAdmin_m0" on "Operations" ("Admin_m0");

ALTER TABLE "Hardware"
	ADD CONSTRAINT "Hardware_FHardwareType_0" FOREIGN KEY ("HardwareType_m0") REFERENCES "HardwareType" ("primaryKey");

CREATE INDEX "Hardware_IHardwareType_m0" on "Hardware" ("HardwareType_m0");

ALTER TABLE "Hardware"
	ADD CONSTRAINT "Hardware_FUser_0" FOREIGN KEY ("Employee_m0") REFERENCES "User" ("primaryKey");

CREATE INDEX "Hardware_IEmployee_m0" on "Hardware" ("Employee_m0");

ALTER TABLE "Hardware"
	ADD CONSTRAINT "Hardware_FWorkplace_0" FOREIGN KEY ("Workplace_m0") REFERENCES "Workplace" ("primaryKey");

CREATE INDEX "Hardware_IWorkplace_m0" on "Hardware" ("Workplace_m0");

ALTER TABLE "Software"
	ADD CONSTRAINT "Software_FVendor_0" FOREIGN KEY ("Vendor_m0") REFERENCES "Vendor" ("primaryKey");

CREATE INDEX "Software_IVendor_m0" on "Software" ("Vendor_m0");

ALTER TABLE "Software"
	ADD CONSTRAINT "Software_FWorkplace_0" FOREIGN KEY ("Workplace_m0") REFERENCES "Workplace" ("primaryKey");

CREATE INDEX "Software_IWorkplace_m0" on "Software" ("Workplace_m0");

ALTER TABLE "Workplace"
	ADD CONSTRAINT "Workplace_FBranchOffice_0" FOREIGN KEY ("Branch_m0") REFERENCES "BranchOffice" ("primaryKey");

CREATE INDEX "Workplace_IBranch_m0" on "Workplace" ("Branch_m0");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


