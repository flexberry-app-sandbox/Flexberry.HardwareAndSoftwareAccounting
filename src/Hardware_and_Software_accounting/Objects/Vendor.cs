﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Hardware_and_Software_accounting
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Vendor.
    /// </summary>
    //  *** Start programmer edit section *** (Vendor CustomAttributes)

    //  *** End programmer edit section *** (Vendor CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("VendorE", new string[] {
            "Name as \'Name\'"})]
    [View("VendorL", new string[] {
            "Name as \'Name\'"})]
    public class Vendor : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        //  *** Start programmer edit section *** (Vendor CustomMembers)

        //  *** End programmer edit section *** (Vendor CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Vendor.Name CustomAttributes)

        //  *** End programmer edit section *** (Vendor.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Vendor.Name Get start)

                //  *** End programmer edit section *** (Vendor.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Vendor.Name Get end)

                //  *** End programmer edit section *** (Vendor.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Vendor.Name Set start)

                //  *** End programmer edit section *** (Vendor.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Vendor.Name Set end)

                //  *** End programmer edit section *** (Vendor.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "VendorE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View VendorE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("VendorE", typeof(IIS.Hardware_and_Software_accounting.Vendor));
                }
            }
            
            /// <summary>
            /// "VendorL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View VendorL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("VendorL", typeof(IIS.Hardware_and_Software_accounting.Vendor));
                }
            }
        }
    }
}