



CREATE TABLE [Vendor] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [User] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Surname] VARCHAR(255)  NULL,

	 [isAdmin] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Operations] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Date] DATETIME  NULL,

	 [Action] VARCHAR(7)  NULL,

	 [State] VARCHAR(9)  NULL,

	 [Hardware_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Admin_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Hardware] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [InventoryNumber] VARCHAR(255)  NULL,

	 [Name] VARCHAR(255)  NULL,

	 [DateAdded] DATETIME  NULL,

	 [HardwareType_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Employee_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Workplace_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Software] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Version] VARCHAR(255)  NULL,

	 [isFreeware] BIT  NULL,

	 [Vendor_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Workplace_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [BranchOffice] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Address] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Workplace] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [InventoryNumber] VARCHAR(255)  NULL,

	 [OfficeNumber] VARCHAR(255)  NULL,

	 [Place] VARCHAR(255)  NULL,

	 [Branch_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [HardwareType] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [Operations] ADD CONSTRAINT [Operations_FHardware_0] FOREIGN KEY ([Hardware_m0]) REFERENCES [Hardware]
CREATE INDEX Operations_IHardware_m0 on [Operations] ([Hardware_m0])

 ALTER TABLE [Operations] ADD CONSTRAINT [Operations_FUser_0] FOREIGN KEY ([Admin_m0]) REFERENCES [User]
CREATE INDEX Operations_IAdmin_m0 on [Operations] ([Admin_m0])

 ALTER TABLE [Hardware] ADD CONSTRAINT [Hardware_FHardwareType_0] FOREIGN KEY ([HardwareType_m0]) REFERENCES [HardwareType]
CREATE INDEX Hardware_IHardwareType_m0 on [Hardware] ([HardwareType_m0])

 ALTER TABLE [Hardware] ADD CONSTRAINT [Hardware_FUser_0] FOREIGN KEY ([Employee_m0]) REFERENCES [User]
CREATE INDEX Hardware_IEmployee_m0 on [Hardware] ([Employee_m0])

 ALTER TABLE [Hardware] ADD CONSTRAINT [Hardware_FWorkplace_0] FOREIGN KEY ([Workplace_m0]) REFERENCES [Workplace]
CREATE INDEX Hardware_IWorkplace_m0 on [Hardware] ([Workplace_m0])

 ALTER TABLE [Software] ADD CONSTRAINT [Software_FVendor_0] FOREIGN KEY ([Vendor_m0]) REFERENCES [Vendor]
CREATE INDEX Software_IVendor_m0 on [Software] ([Vendor_m0])

 ALTER TABLE [Software] ADD CONSTRAINT [Software_FWorkplace_0] FOREIGN KEY ([Workplace_m0]) REFERENCES [Workplace]
CREATE INDEX Software_IWorkplace_m0 on [Software] ([Workplace_m0])

 ALTER TABLE [Workplace] ADD CONSTRAINT [Workplace_FBranchOffice_0] FOREIGN KEY ([Branch_m0]) REFERENCES [BranchOffice]
CREATE INDEX Workplace_IBranch_m0 on [Workplace] ([Branch_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

